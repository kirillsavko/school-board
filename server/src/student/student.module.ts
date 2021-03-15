import { Module } from '@nestjs/common';
import { StudentService } from './services/student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity])],
  exports: [StudentService],
  providers: [StudentService],
})
export class StudentModule {}
