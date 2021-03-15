import { ROLES } from '../../enums/roles';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  OneToOne,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { UserRO } from '../dtos/user.dto';
import { TeacherEntity } from 'src/teacher/teacher.entity';
import { ParentEntity } from 'src/parent/parent.entity';
import { StudentEntity } from '../../student/student.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({
    type: 'text',
    unique: true,
  })
  name: string;

  @Column({
    type: 'text',
    unique: true,
  })
  surname: string;

  @Column('text')
  password: string;

  @OneToOne(() => TeacherEntity, (teacher: TeacherEntity) => teacher.user)
  teacher: TeacherEntity;

  @OneToOne(() => ParentEntity, (parent: ParentEntity) => parent.user)
  parent: ParentEntity;

  @OneToOne(() => StudentEntity, (student: StudentEntity) => student.user)
  student: StudentEntity;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }

  toResponseObject(showToken = true): UserRO {
    const { id, created, name, surname, token } = this;
    const responseObject: UserRO = {
      id,
      created,
      name,
      surname,
    };

    if (showToken) {
      responseObject.token = token;
    }

    return responseObject;
  }

  private get token(): string {
    const { id, surname, name } = this;

    return jwt.sign(
      {
        id,
        surname,
        name,
      },
      process.env.SECRET,
      { expiresIn: '7d' },
    );
  }
}