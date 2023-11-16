import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { IsUUID, MinLength, IsDecimal } from 'class-validator';

@ObjectType()
export class Product {
  @IsUUID()
  @Field(() => ID)
  id: string;

  @MinLength(1)
  @Field(() => String)
  name: string;

  @IsDecimal()
  @Field(() => Int)
  price: number;
}
