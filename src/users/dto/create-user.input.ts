import { InputType, Field } from '@nestjs/graphql';
import { MinLength, IsEmail, IsOptional, IsInt, IsUUID } from 'class-validator';
import { Product } from 'src/products/models/product.model';

@InputType()
export class CreateUserInput {
  @IsUUID()
  @Field()
  id: string;

  @MinLength(1)
  @Field()
  name: string;

  @IsEmail()
  @Field()
  email: string;

  @IsInt()
  @Field()
  age: number;

  @Field({ nullable: true, defaultValue: [] })
  @IsOptional()
  order: Product[];
}
