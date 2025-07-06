import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';
import { LoginDto } from 'src/dto/request/auth/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
