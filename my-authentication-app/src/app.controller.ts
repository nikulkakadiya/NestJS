import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './role.guard';

@Controller('/app')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): String {
    return this.authService.generateToken(req.user);
  }

  @Get('/android-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard('android-developer'))
  androidDeveloperData(@Request() req): String {
    return 'return android developer' + JSON.stringify(req.user);
  }

  @Get('/web-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard('web-developer'))
  webDeveloperData(@Request() req): String {
    return 'return android developer' + JSON.stringify(req.user);
  }
}
