import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './modules/books/books.module';
import { MongoDataModule } from './modules/data/mongo-data/mongo-data.module';

@Module({
  imports: [BooksModule, MongoDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
