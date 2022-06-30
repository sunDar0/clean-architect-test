import { Injectable } from '@nestjs/common';
import { Book } from 'src/core/entities/books.entities';
import { ICrmServices } from '../../core/abstracts/crm-service.abstract';

@Injectable()
export class SalesforceService implements ICrmServices
{
  bookAdd(book: Book): Promise<boolean> {
    return Promise.resolve(true);''
  }

}