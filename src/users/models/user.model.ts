import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/products/models/product.model';

@ObjectType({ description: 'User' })
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => Int)
  age: number;

  @Field(() => [Product])
  orders: Product[];
}
