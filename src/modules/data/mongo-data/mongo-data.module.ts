import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, Book, Genre } from 'src/core/entities/books.entities';
import { IDataServices } from '../../../core/abstracts/data-service.abstract';
import { AuthorSchema } from './models/author.model';
import { BookSchema } from './models/book.model';
import { GenreSchema } from './models/genre.model';
import { MongoDataService } from './mongo-data.service';

@Module({
  imports:[
    MongooseModule.forRoot('mongodb://dar:Asd1fgh2@127.0.0.1:27017/testdb'),
    MongooseModule.forFeature([
      { name: Author.name, schema: AuthorSchema },
      { name: Book.name, schema: BookSchema },
      { name: Genre.name, schema: GenreSchema },
    ])
  ],
  providers:[
    {
      provide:IDataServices,
      useClass:MongoDataService
    }
  ],
  exports: [IDataServices],
})
export class MongoDataModule {}
