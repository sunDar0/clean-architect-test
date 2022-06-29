import { IDataServices } from '../../core/abstracts/data-service.abstract';
import { ICrmServices } from '../../core/abstracts/crm-service.abstract';
import { Book } from '../../core/entities/books.entities';
export class BookServices
{
  constructor(
    private dataService: IDataServices,
    private crmService: ICrmServices,
  ){}

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