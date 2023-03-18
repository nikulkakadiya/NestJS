import { Module } from '@nestjs/common';
import { UserController } from './users.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
  exports: [], 
})
export class UsersModule {
  constructor() {
    console.log('User module');
  }
}
