import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { LocalAuthGuard } from './guards';
import { AuthService } from './auth.service';
import { User as UserEntity } from '../models';
//import { LoginRequestDto } from './dtos/login-response.dto';
import { Auth, User } from '../commons/decorators';

@ApiTags('Auth routes')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /*@UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDto: LoginRequestDto, @User() user: UserEntity) {
    const data = await this.authService.login(user);
    return {
      message: 'Login exitoso',
      data,
    };
  }*/

  @Auth()
  @Get('profile')
  profile(@User() user: UserEntity) {
    return {
      message: 'Petición correcta',
      user,
    };
  }

  @Auth()
  @Get('refresh')
  refreshToken(@User() user: UserEntity) {
    const data = this.authService.login(user);
    return {
      message: 'Refresh exitoso',
      data,
    };
  }
}
