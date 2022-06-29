import { Book } from "../entities/books.entities";

export abstract class ICrmServices
{
  abstract bookAdd(book:Book): Promise<boolean>;
}