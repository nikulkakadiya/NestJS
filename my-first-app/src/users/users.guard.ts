import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UsersGuard implements CanActivate {
  public key: String = 'nikulbkakadiya';
  public user: String = 'nikul';
  public pass: String = 'n123';
  canActivate(context: ExecutionContext): boolean {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    if (
      request.header('key') == undefined ||
      request.header('user') == undefined ||
      request.header('pass') == undefined
    )
      return false;

    return (
      request.header('key') == this.key &&
      request.header('user') === 'nikul' &&
      request.header('pass') === 'n123'
    );
  }
}
