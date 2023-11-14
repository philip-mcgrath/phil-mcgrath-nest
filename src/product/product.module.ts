import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { ProductRepositoryImpl } from './repositories/product.repository.impl';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepositoryImpl])],
  providers: [ProductService, ProductResolver],
})
export class ProductModule {}
