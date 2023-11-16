import { InputType, Field } from '@nestjs/graphql';
import { MinLength, IsEmail, IsOptional, IsInt } from 'class-validator';
import { Product } from 'src/products/models/product.model';

@InputType()
export class CreateUserInput {
  @Field()
  id: string;

  @MinLength(1)
  @Field()
  name: string;

  @IsEmail()
  @Field()
  email: string;

  @Field()
  @IsInt()
  age: number;

  @Field({ nullable: true })
  @IsOptional()
  orders: Product[];
}
