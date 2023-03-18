import { Module } from '@nestjs/common';
import { AuthUsersModule } from 'src/authUser/user.module';
import { PassportLocalStrategy } from './passport.local.strategy';

@Module({
  imports: [AuthUsersModule],
  controllers: [],
  providers: [PassportLocalStrategy],
  exports: [],
})
export class AuthModule {
  constructor() {
    console.log('Auth module');
  }
}
