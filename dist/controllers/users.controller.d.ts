import { CreateUserDto } from 'src/dto/request/user/create-user.dto';
import { UserResponseDto } from 'src/dto/response/user/user.dto';
import { UsersService } from 'src/services/users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("../entities/user.entity").User>;
    findAll(): Promise<UserResponseDto[]>;
    findOne(id: string): Promise<UserResponseDto | null>;
    update(id: string, updateUserDto: any): string;
    remove(id: string): string;
}
