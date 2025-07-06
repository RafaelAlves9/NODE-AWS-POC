import { CreateUserDto } from 'src/dto/request/user/create-user.dto';
import { UserResponseDto } from 'src/dto/response/user/user.dto';
import { User } from 'src/entities/user.entity';
import { PrismaService } from 'src/infrastructure/prisma/prisma.service';
import { IUsersRepository } from './users.repository';
export declare class PrismaUsersRepository implements IUsersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<User>;
    findAll(): Promise<UserResponseDto[]>;
    findById(id: number): Promise<UserResponseDto | null>;
    findByEmail(email: string): Promise<User | null>;
}
