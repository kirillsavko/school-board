import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { ParentModule } from './parent/parent.module';

@Module({
  imports: [UserModule, AuthModule, StudentModule, TeacherModule, ParentModule],
  exports: [UserModule],
})
export class ApiModule {}
