import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm';
import { ParentEntity } from '../parent.entity';

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(ParentEntity)
    private parentRepository: Repository<ParentEntity>,
  ) {}

  async createParent(data) {
    const parent = await this.parentRepository.create(data);
    await this.parentRepository.save(parent);
  }
}
