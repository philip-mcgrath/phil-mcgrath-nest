import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { ProductsService } from 'src/products/products.service';

@Module({
  providers: [UsersResolver, UsersService, ProductsService],
})
export class UsersModule {}
