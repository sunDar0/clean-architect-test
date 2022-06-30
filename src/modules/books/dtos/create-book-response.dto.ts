import { Book } from "src/core/entities/books.entities";

export class CreateBookResponseDto
{
  success: boolean;
  createdBook: Book;
}