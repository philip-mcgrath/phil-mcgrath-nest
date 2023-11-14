import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { CreateProductInput } from './dto/create-product.input';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Mutation(() => Boolean)
  async createProduct(@Args('input') input: CreateProductInput) {
    // await this.productService.create(input);
    return true;
  }
}
