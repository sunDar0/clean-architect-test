import { Injectable } from '@nestjs/common';
import { Book } from 'src/core/entities/books.entities';
import { CreateBookDto } from './dtos/create-book.dto';

@Injectable()
export class BooksFactoryService {
  createNewBook(createBookDto: CreateBookDto) {
    const newBook = new Book();
    newBook.title = createBookDto.title;
    newBook.author = createBookDto.authorId;
    newBook.genre = createBookDto.genreId;
    newBook.publishDate = createBookDto.publishDate;

    return newBook;
  }
}
