import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { Product } from './products/models/product.model';
import { User } from './users/models/user.model';
import { UsersService } from './users/users.service';
import { ProductsService } from './products/products.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [Product, User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProductsModule,
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UsersService, ProductsService],
})
export class AppModule {
  constructor() {}
}
