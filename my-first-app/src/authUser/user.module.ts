import { Module } from '@nestjs/common';
import { AuthUserService } from './user.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AuthUserService],
  exports: [AuthUserService],
})
export class AuthUsersModule {
  constructor() {
    console.log('AuthUser module');
  }
}
