import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserDTO } from 'src/user/dtos/user.dto';
import { ROLES } from 'src/enums/roles';
import { UserService } from 'src/user/services/user.service';
import { TeacherService } from '../teacher/services/teacher.service';
import { StudentService } from '../student/services/student.service';
import { ParentService } from 'src/parent/services/parent.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private teacherService: TeacherService,
    private studentService: StudentService,
    private parentService: ParentService,
  ) {}

  async login(data: UserDTO) {
    const { email, password } = data;
    const user = await this.userService.getUser(email);
    if (!user || !(await user.comparePassword(password))) {
      throw new HttpException(
        'Invalid username/password',
        HttpStatus.BAD_REQUEST,
      );
    }
    return user.toResponseObject();
  }

  async register(data: UserDTO) {
    const { email } = data;
    let user = await this.userService.getUser(email);
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    user = await this.userService.createUser(data);
    return user.toResponseObject();
  }
}
