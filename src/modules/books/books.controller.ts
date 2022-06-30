import { Body, Controller, Get, Post } from "@nestjs/common";
import { BooksService } from "./books.service";
import { BooksFactoryService } from "./books.factory.service";
import { CreateBookDto } from './dtos/create-book.dto';
import { CreateBookResponseDto } from "./dtos/create-book-response.dto";


@Controller('books')
export class BooksContoller
{
  constructor(
    private booksService: BooksService,
    private BooksFactoryService: BooksFactoryService,
  ){ }

  @Get('')
  async findBooks()
  {
    
    try{
      return this.booksService.findBooks();
    }catch(e){
      throw e;
    }
  }
  @Post('')
  async createBook(@Body() bookDto:CreateBookDto)
  {
    const createBookResponse = new CreateBookResponseDto();

    try{
      const book = this.BooksFactoryService.createNewBook(bookDto);
      console.log(book);
      const createdBook = await this.booksService.createBook(book);

      createBookResponse.success = true;
      createBookResponse.createdBook = createdBook;

    }catch(e){
      console.log(e);
      createBookResponse.success = false;
    }
    return createBookResponse;
  }
}