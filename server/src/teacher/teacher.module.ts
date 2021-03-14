import { Module } from '@nestjs/common';
import { TeacherService } from './services/teacher.service';

@Module({
  providers: [TeacherService],
})
export class TeacherModule {}
