import { Module, Controller } from '@nestjs/common';
import { MongoDataModule } from '../data/mongo-data/mongo-data.module';
import { BooksContoller } from './books.controller';
import { BooksFactoryService } from './books.factory.service';
import { BooksService } from './books.service';
import { ICrmServices } from '../../core/abstracts/crm-service.abstract';
import { SalesforceService } from '../salesforce/salesforce-service';

@Module({
  imports:[MongoDataModule],
  controllers:[BooksContoller],
  providers:[
    BooksService, 
    {
      provide:ICrmServices,
      useClass:SalesforceService
    }, 
    BooksFactoryService
  ]
})
export class BooksModule {}
