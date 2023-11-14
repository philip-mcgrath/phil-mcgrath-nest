import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserRepositoryImpl } from './repositories/user.repository.impl';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepositoryImpl])],
  providers: [UserService, UserResolver]
})
export class UserModule { }
