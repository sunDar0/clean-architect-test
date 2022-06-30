import { IDataServices } from '../../core/abstracts/data-service.abstract';
import { ICrmServices } from '../../core/abstracts/crm-service.abstract';
import { Book } from '../../core/entities/books.entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService
{
  constructor(
    private dataService: IDataServices,
    private crmService: ICrmServices,
  ){}


  async findBooks()
  {
    return await this.dataService.books.getAll();
  }

  async createBook(book:Book): Promise<Book>
  {
    try{
      const createdBook = await this.dataService.books.create(book);
      await this.crmService.bookAdd(createdBook);

      return createdBook;
    }
    catch(error){
      throw error;
    }
  }
}