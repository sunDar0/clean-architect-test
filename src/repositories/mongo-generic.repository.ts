import { Model } from 'mongoose';
import { IGenericRepository } from '../core/abstracts/generic-repository.abstract';
export class MongoGenericRepository<T> implements IGenericRepository<T>
{
  
  constructor(private readonly repository: Model<T>,private readonly populateOnFind: string[] = [])
  {

  }
  get(id: string) {
    return this.repository.findById(id).populate(this.populateOnFind).exec();
  }
  create(item: T) {
    return this.repository.create(item);
  }

  getAll(): Promise<T[]> {
    return this.repository.find().populate(this.populateOnFind).exec();
  }

  

  update(id: string, item: T) {
    return this.repository.findByIdAndUpdate(id, item);  
  }
  
}