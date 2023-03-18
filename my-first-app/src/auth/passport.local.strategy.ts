import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthUser } from 'src/authUser/user.entity';
import { AuthUserService } from 'src/authUser/user.service';

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: AuthUserService) {
    super();
  }

  validate(username: String, password: String): AuthUser {
    const user: AuthUser = this.userService.getUserByName(username);

    if (user == undefined) throw new UnauthorizedException();

    if (user.password == password) return user;
  }
}
