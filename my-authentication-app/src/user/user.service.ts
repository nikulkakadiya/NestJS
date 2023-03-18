import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'user1',
      password: 'admin',
      email: 'user1@gmail.com',
      role: 'android-developer',
    },
    {
      username: 'user2',
      password: 'admin',
      email: 'user2@gmail.com',
      role: 'web-developer',
    },
    {
      username: 'user3',
      password: 'admin',
      email: 'user3@gmail.com',
      role: 'android-developer',
    },
  ];

  getUserByName(userName: String): User {
    return this.users.find((user: User) => user.username === userName);
  }
}
