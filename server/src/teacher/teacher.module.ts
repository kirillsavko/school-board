import { Module } from '@nestjs/common';
import { TeacherService } from './services/teacher.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherEntity } from './teacher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeacherEntity])],
  exports: [TeacherService],
  providers: [TeacherService],
})
export class TeacherModule {}
