import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  // generate token
  generateToken(payloas: User): String {
    return this.jwtService.sign(payloas);
  }
}
