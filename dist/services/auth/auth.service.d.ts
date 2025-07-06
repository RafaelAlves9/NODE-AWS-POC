import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/services/users.service';
import { LoginDto } from 'src/dto/request/auth/login.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
}
