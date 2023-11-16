import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';
import { UpdateUserInput } from './dto/update-user.input';
import { ProductsService } from 'src/products/products.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(private readonly productsService: ProductsService) {}

  private readonly users: Array<User> = [
    {
      id: '1',
      name: 'John',
      email: 'john.doe@example.com',
      age: 25,
      order: [],
    },
  ];

  create(user: User): User {
    user.id = (this.users.length + 1).toString();
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(name: string): User | null {
    return this.users.find((user) => user.name === name) || null;
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    const userToUpdate = this.users.find((user) => user.id === id);
    if (userToUpdate) {
      Object.assign(userToUpdate, updateUserInput);
      return userToUpdate;
    }
    throw new Error(`User with id ${id} not found`);
  }

  async remove(id: number): Promise<void> {
    this.users.splice(id, 1);
    return;
  }

  async createOrder(name: string, productName: string): Promise<User> {
    let user = this.findOne(name);
    if (!user) {
      user = this.create({
        id: new uuidv4(),
        name: name,
        email: `${name}@example.com`,
        age: 0,
        order: [],
      });
    }

    const product = await this.productsService.findOne(productName);

    if (!product) {
      throw new Error(
        `Product with name ${productName} not found. Please create it first.`,
      );
    }

    user.order.push(product);
    return this.update(user.id, user);
  }
}
