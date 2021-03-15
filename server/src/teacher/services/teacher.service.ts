import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm';
import { TeacherEntity } from '../teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(TeacherEntity)
    private teacherRepository: Repository<TeacherEntity>,
  ) {}

  async createTeacher(data) {
    const teacher = await this.teacherRepository.create(data);
    await this.teacherRepository.save(teacher);
  }
}
