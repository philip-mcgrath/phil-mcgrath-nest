import { Injectable } from '@nestjs/common';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './models/product.model';
import { ProductsArray } from './data/products.data';

@Injectable()
export class ProductsService {
  constructor() {}

  products = ProductsArray;

  create(product: Product): Product {
    product.id = (this.products.length + 1).toString();
    this.products.push(product);
    return product;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(name: string): Product | null {
    return this.products.find((product) => product.name === name) || null;
  }

  update(id: string, updateProductInput: UpdateProductInput) {
    const productToUpdate = this.products.find((product) => product.id === id);
    if (productToUpdate) {
      Object.assign(productToUpdate, updateProductInput);
      return productToUpdate;
    }
    throw new Error(`Product with id ${id} not found`);
  }

  async remove(id: number): Promise<void> {
    this.products.splice(id, 1);
    return;
  }
}
