import { Module } from '@nestjs/common';
import { UsersController } from 'src/controllers/users.controller';
import { PrismaUsersRepository } from 'src/repositories/prisma-users.repository';
import { UsersService } from 'src/services/users.service';
import { PrismaModule } from 'src/infrastructure/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'UsersRepository',
      useClass: PrismaUsersRepository,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
