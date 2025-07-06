import { User } from 'src/entities/user.entity';
import { CreateUserDto } from 'src/dto/request/user/create-user.dto';

export interface IUsersRepository {
  create(data: CreateUserDto): Promise<User>;
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}
