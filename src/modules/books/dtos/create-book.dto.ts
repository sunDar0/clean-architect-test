import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto
{
  @IsString()
  @IsNotEmpty()
  title:string;

  @IsNotEmpty()
  authorId: any;

  @IsNotEmpty()
  genreId: any;

  @IsDate()
  publishDate:Date;
  
}