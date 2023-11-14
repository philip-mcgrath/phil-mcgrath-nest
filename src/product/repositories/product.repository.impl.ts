import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../../entities/product.entity';
import { ProductRepository } from './product.repository';

@EntityRepository(Product)
export class ProductRepositoryImpl
  extends Repository<Product>
  implements ProductRepository {}
