import { Module } from '@nestjs/common';
import { BookController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { AuthenticationController } from './authentication.controller';
import { AuthUsersModule } from './authUser/user.module';
import { BookService } from './book.service';
// import { BookController } from './app.controller';
// import { BookService } from './book.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, AuthUsersModule, AuthModule],
  controllers: [BookController, AuthenticationController],
  providers: [BookService],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
