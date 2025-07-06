import { CreateUserDto } from 'src/dto/request/user/create-user.dto';
import { UsersService } from 'src/services/users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("../entities/user.entity").User>;
    findAll(): Promise<import("../entities/user.entity").User[]>;
    findOne(id: string): Promise<import("../entities/user.entity").User | null>;
    update(id: string, updateUserDto: any): string;
    remove(id: string): string;
}
