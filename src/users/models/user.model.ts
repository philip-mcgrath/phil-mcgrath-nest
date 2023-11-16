import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsInt, IsUUID, MinLength } from 'class-validator';
import { Product } from 'src/products/models/product.model';

@ObjectType({ description: 'User' })
export class User {
  @IsUUID()
  @Field(() => ID)
  id: string;

  @MinLength(1)
  @Field(() => String)
  name: string;

  @IsEmail()
  @Field(() => String)
  email: string;

  @IsInt()
  @Field(() => Int)
  age: number;

  @Field(() => [Product], { nullable: 'items' })
  order: Product[];
}
