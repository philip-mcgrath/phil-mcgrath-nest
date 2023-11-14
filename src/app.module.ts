import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Product } from './entities';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserService } from './user/user.service';
import { ProductService } from './product/product.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    entities: [User, Product],
    synchronize: true,
  }),
    UserModule,
    ProductModule,
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'home'),
  }),],
  controllers: [AppController],
  providers: [AppService, UserService, ProductService],
})
export class AppModule { }
