import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { UpdateSignupDto } from './dto/update.signup.dto';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  JwtService: any;
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async create(signupDto: SignupDto, res) {
    const { email, password } = signupDto;
    const userExist = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (userExist) {
      return res.status(400).json('User already exists');
    } else {
      const saltORRounds = 10;
      const hash = await bcrypt.hash(password, saltORRounds);
      const newUser = await this.prisma.user.create({
        data: {
          email: email,
          password: hash,
        },
      });
      return res.status(201).json(newUser);
    }
  }

  async SignIn(signupDto: SignupDto, res) {
    const { email, password } = signupDto;
    console.log(email);
    const userExist = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (userExist) {
      const isMatch = await bcrypt.compare(password, userExist.password);
      if (isMatch) {
        const payload = { sub: userExist.id, email: userExist.email };
        return res.status(200).json({
          accessToken: await this.jwtService.signAsync(payload),
        });
      } else {
        res.status(401).json('Invalid credentials');
      }
    } else {
      res.status(404).json('User not found');
    }
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateSignupDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
