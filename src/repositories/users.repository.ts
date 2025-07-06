import { User } from 'src/entities/user.entity';
import { CreateUserDto } from 'src/dto/request/user/create-user.dto';
import { UserResponseDto } from 'src/dto/response/user/user.dto';

export interface IUsersRepository {
  create(data: CreateUserDto): Promise<User>;
  findAll(): Promise<UserResponseDto[]>;
  findById(id: number): Promise<UserResponseDto | null>;
  findByEmail(email: string): Promise<User | null>;
}
