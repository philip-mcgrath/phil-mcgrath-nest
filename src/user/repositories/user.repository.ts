import { User } from '../../entities/user.entity';
import { Repository } from 'typeorm';

export interface UserRepository extends Repository<User> { }
