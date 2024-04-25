import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    console.log('categories ', createCategoryDto);
    const newCat = await this.prisma.category.create({
      data: createCategoryDto,
    });
    return newCat;
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
  async createUser_info() {
    const newUserInfo = await this.prisma.user_info.create({
      data: {
        name: 'Hazrat Ali',
        address: 'Dhaka',
        phone: '32434234',
        buiness_name: 'ABC LTD',
        bank_info: 'Dunno',
        user: { connect: { id: '6d4a8e97-fa5a-4240-b125-3f5eaf6468db' } },
        role: {
          connect: {
            id: '757c667a-16f6-408d-9a41-fde75c222319',
          },
        },
      },
    });

    return this.prisma.user_info.findMany();
  }
}
