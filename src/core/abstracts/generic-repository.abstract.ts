export abstract class IGenericRepository<T> 
{
  abstract getAll(): Promise<T[]>;
  abstract get(id: string);
  abstract create(item: T);
  abstract update(id: string, item: T);

}