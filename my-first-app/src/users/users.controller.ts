import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersGuard } from './users.guard';

@Controller('user')
@UseGuards(new UsersGuard())
export class UserController {
  // find all user

  @Get('/findAll')
  findAllUser(): String {
    return 'find all user';
  }

  // add user
  @Post('/add')
  addUser(): String {
    return 'add user';
  }
}
