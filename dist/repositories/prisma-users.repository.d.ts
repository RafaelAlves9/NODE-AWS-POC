import { CreateUserDto } from 'src/dto/request/user/create-user.dto';
import { User } from 'src/entities/user.entity';
import { PrismaService } from 'src/infrastructure/prisma/prisma.service';
import { IUsersRepository } from './users.repository';
export declare class PrismaUsersRepository implements IUsersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
}
