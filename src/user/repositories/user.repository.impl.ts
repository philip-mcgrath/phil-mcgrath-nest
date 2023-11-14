import { EntityRepository, Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { UserRepository } from './user.repository';

@EntityRepository(User)
export class UserRepositoryImpl extends Repository<User> implements UserRepository { }
