import { Injectable, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { AuthGuard } from 'src/auth/auth.guard';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  @UseGuards(AuthGuard)
  create(createUserDto: CreateUserDto) {}

  test() {
    console.log('Inside test');
    return 'It works';
  }

  findAll(res) {
    // console.log(res.user);
    return `Hello `;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
