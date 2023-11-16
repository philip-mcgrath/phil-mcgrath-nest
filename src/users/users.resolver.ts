import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { ProductsService } from 'src/products/products.service';
import { User } from './models/user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { v4 as uuidv4 } from 'uuid';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly productsService: ProductsService,
  ) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) name: string) {
    return this.usersService.findOne(name);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }

  @Mutation(() => User)
  async createOrder(
    @Args('name', { type: () => String }) name: string,
    @Args('productName', { type: () => String }) productName: string,
  ) {
    let user = await this.usersService.findOne(name);
    if (!user) {
      user = await this.usersService.create({
        id: new uuidv4(),
        name: name,
        email: 'default@example.com',
        age: 0,
        orders: [],
      });
    }

    const product = await this.productsService.findOne(productName);

    if (!product) {
      throw new Error(`Product ${productName} not found`);
    }

    user.orders.push(product);
    return this.usersService.update(user.id, user);
  }
}
