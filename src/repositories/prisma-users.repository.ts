import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/request/user/create-user.dto';
import { User } from 'src/entities/user.entity';
import { PrismaService } from 'src/infrastructure/prisma/prisma.service';
import { IUsersRepository } from './users.repository';

@Injectable()
export class PrismaUsersRepository implements IUsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const newUser = await this.prisma.user.create({ data });
    return { ...newUser, password: newUser.password };
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
