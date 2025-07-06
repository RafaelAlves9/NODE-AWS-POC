import { CreateUserDto } from 'src/dto/request/user/create-user.dto';
import { IUsersRepository } from 'src/repositories/users.repository';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: IUsersRepository);
    create(createUserDto: CreateUserDto): Promise<import("../entities/user.entity").User>;
    findAll(): Promise<import("../entities/user.entity").User[]>;
    findOne(id: number): Promise<import("../entities/user.entity").User | null>;
    findByEmail(email: string): Promise<import("../entities/user.entity").User | null>;
    update(id: number, updateUserDto: any): string;
    remove(id: number): string;
}
