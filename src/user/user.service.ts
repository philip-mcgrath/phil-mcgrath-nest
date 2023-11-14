import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    // async createUser(username: string) {
    //     const user = this.userRepository.create({ username });
    //     return await this.userRepository.save(user);
    // }


    // async findUserByUsername(username: string) {
    //     return await this.userRepository.findOne({ where: { username } });
    // }

    // async addProductToUserOrders(username: string, productName: string) {
    //     const user = await this.findUserByUsername(username);
    //     if (!user) {
    //         user = await this.createUser(username);
    //     }

    //     const product = await this.productService.findProductByName(productName);
    //     if (!product) {
    //         throw new Error('Product not found');
    //     }

    //     user.orders.push(product);
    //     await this.userRepository.save(user);
    // }

}
