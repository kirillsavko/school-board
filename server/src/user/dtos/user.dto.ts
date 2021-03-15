import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { ROLES } from '../../enums/roles';

export class UserDTO {
  @IsNotEmpty()
  email: string;

  @IsOptional()
  name?: string;

  @IsOptional()
  surname?: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsEnum(Object.values(ROLES))
  role?: string;
}

export class UserRO {
  id: string;
  name: string;
  surname: string;
  email: string;
  created: Date;
  token?: string;
  // role?: string;
}
