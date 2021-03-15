import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm';
import { UserDTO } from '../dtos/user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createUser(data: UserDTO) {
    const user = await this.userRepository.create(data);
    await this.userRepository.save(user);
    return user;
  }

  async getUser(email) {
    return this.userRepository.findOne({
      where: { email },
      relations: ['teacher', 'student', 'parent'],
    });
  }
}
