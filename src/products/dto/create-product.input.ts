import { InputType, Field } from '@nestjs/graphql';
import { MinLength, IsDecimal, IsUUID } from 'class-validator';

@InputType()
export class CreateProductInput {
  @IsUUID()
  @Field()
  id: string;

  @MinLength(1)
  @Field()
  name: string;

  @IsDecimal()
  @Field()
  price: number;
}
