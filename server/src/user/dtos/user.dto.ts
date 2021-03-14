import { IsNotEmpty } from 'class-validator';
import { ROLES } from 'src/enums/roles';

export class UserDTO {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
  role?: ROLES;
}

export class UserRO {
  id: string;
  name: string;
  surname: string;
  created: Date;
  token?: string;
  // role?: string;
}
