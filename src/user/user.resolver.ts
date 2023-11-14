import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';

@Resolver()
export class UserResolver {
    constructor(private userService: UserService) { }

    @Mutation(() => Boolean)
    async createUser(@Args('input') input: CreateUserInput) {
        // await this.userService.create(input);
        return true;
    }
}
