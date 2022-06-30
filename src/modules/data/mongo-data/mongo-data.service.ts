import { Injectable, OnApplicationBootstrap,  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from 'src/core/abstracts/data-service.abstract';
import { IGenericRepository } from 'src/core/abstracts/generic-repository.abstract';
import { Author, AuthorDocument } from './models/author.model';
import { Book, BookDocument } from './models/book.model';
import { Genre, GenreDocument } from './models/genre.model';
import { MongoGenericRepository } from '../../../repositories/mongo-generic.repository';


@Injectable()
export class MongoDataService implements IDataServices, OnApplicationBootstrap
{
  authors: IGenericRepository<Author>;
  books: IGenericRepository<Book>;
  genres: IGenericRepository<Genre>;

  constructor(
    @InjectModel(Author.name)
    private authorRepo: Model<AuthorDocument>,

    @InjectModel(Book.name)
    private bookRepo: Model<BookDocument>,

    @InjectModel(Genre.name)
    private genreRepo: Model<GenreDocument>
  ){ }
  onApplicationBootstrap() {
    this.authors = new MongoGenericRepository<Author>(this.authorRepo);
    this.books = new MongoGenericRepository<Book>(this.bookRepo, ['author','genre']);
    this.genres = new MongoGenericRepository<Genre>(this.genreRepo);
    
  }

  
 
}
