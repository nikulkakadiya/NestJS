import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  // add book

  addBook(): String {
    return 'this will add book';
  }

  //delete book

  deleteBook(): String {
    return 'this will delete book';
  }

  // update book

  updateBook(): String {
    return 'this will update book';
  }

  // find all book

  findAllBook(): String {
    return 'this will all book find';
  }

  // findById

  findById(id): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
}
