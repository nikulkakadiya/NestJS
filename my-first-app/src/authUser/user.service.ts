import { Injectable } from '@nestjs/common';
import { AuthUser } from './user.entity';

@Injectable()
export class AuthUserService {
  public authUser: AuthUser[] = [
    {
      username: 'user1',
      password: 'admin',
      email: 'user1@gmail.com',
    },
    {
      username: 'user2',
      password: 'admin',
      email: 'user2@gmail.com',
    },
    {
      username: 'user3',
      password: 'admin',
      email: 'user3@gmail.com',
    },
  ];

  getUserByName(userName: String): AuthUser {
    return this.authUser.find((user: AuthUser) => user.username === userName);
  }
}
