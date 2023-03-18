import { Controller, Get } from '@nestjs/common';

@Controller('/auth')
export class AuthenticationController {
  @Get('/add')
  addDemo(): String {
    return 'Demo send';
  }
}
