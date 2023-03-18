import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Request,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Response } from 'express';
import { AppInterceptor } from './app.interceptor';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  // this object provide nest js
  constructor(private bookService: BookService) {}

  //   public BookService: BookService = new BookService();
  // add book

  @Post('/add')
  @UseInterceptors(new AppInterceptor())
  addBook(@Req() req: Request, @Res() res: Response): any {
    return res.json(req.body);
  }

  //delete book
  @Delete('/delete')
  deleteBook(): String {
    return this.bookService.deleteBook();
  }

  // update book
  @Put('/update')
  updateBook(): String {
    return this.bookService.updateBook();
  }

  // find all book
  @Get('/findAll')
  findAllBook(): String {
    return this.bookService.findAllBook();
  }

  // findById
  @Get('findById/:id')
  findById(@Param() params): string {
    console.log(params.id);
    return this.bookService.findById(params.id);
  }

  // authontication check this

  @Get('/authUser')
  @UseGuards(AuthGuard('local'))
  checkAuth(@Request() req): String {
    return req.user;
  }
}
