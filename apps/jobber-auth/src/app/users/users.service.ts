import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma-clients/jobber-auth';

import { hash } from 'bcryptjs';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaSerive: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    return this.prismaSerive.user.create({
      data: {
        ...data,
        password: await hash(data.password, 10),
      },
    });
  }

  async getUsers() {
    return this.prismaSerive.user.findMany();
  }
}
