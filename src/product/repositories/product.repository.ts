import { Product } from '../../entities/product.entity';
import { Repository } from 'typeorm';

export interface ProductRepository extends Repository<Product> { }
