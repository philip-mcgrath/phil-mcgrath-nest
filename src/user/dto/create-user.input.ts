import { InputType, Field } from '@nestjs/graphql';
import { MinLength, IsEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
    @MinLength(1)
    @Field()
    name: string;

    @MinLength(1)
    @Field()
    age: number;

    @IsEmail()
    @Field()
    email: string;
}
