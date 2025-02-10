import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthLoginInputDto } from '../dtos/auth-login-input.dto';
import { AuthRegisterInputDto } from '../dtos/auth-register-input.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: AuthLoginInputDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  async register(@Body() registerDto: AuthRegisterInputDto) {
    return this.authService.register(registerDto);
  }
}
