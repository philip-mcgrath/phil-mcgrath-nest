import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) { }

  @Post('add-product-to-user')
  async addProductToUser(@Body() body: { username: string, productName: string }) {
    const { username, productName } = body;
    // await this.userService.addProductToUserOrders(username, productName);
    return { message: 'Product added to user' };
  }
}
