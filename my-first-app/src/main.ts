import { NestFactory } from '@nestjs/core';
import { NextFunction } from 'express';
import { RootModule } from './root.module';
// import { UsersGuard } from './users/users.guard';

function globalMiddleWareOne(req: Request, res: Response, next: NextFunction) {
  console.log('this is global middleware');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);

  // all rout are protected this guard
  // app.useGlobalGuards(new UsersGuard());
  app.use(globalMiddleWareOne);
  await app.listen(3000);
}
bootstrap();

//video 12 min 11.51
