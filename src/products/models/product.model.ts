import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsUUID, MinLength, IsDecimal } from 'class-validator';

@ObjectType()
@InputType('ProductInput')
export class Product {
  @IsUUID()
  @Field(() => ID)
  id: string;

  @MinLength(1)
  @Field(() => String)
  name: string;

  @IsDecimal({ decimal_digits: '2' })
  @Field(() => Int)
  price: number;
}
