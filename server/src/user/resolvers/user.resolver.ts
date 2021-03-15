import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { UserDTO } from '../dtos/user.dto';
import { AuthService } from 'src/auth/auth.service';

@Resolver()
export class UserResolver {
  constructor(private authService: AuthService) {}

  @Mutation()
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const user: UserDTO = { email, password };
    return await this.authService.login(user);
  }

  @Mutation()
  async register(
    @Args('name') name: string,
    @Args('password') password: string,
    @Args('surname') surname: string,
    @Args('email') email: string,
    @Args('role') role: string,
  ) {
    const user: UserDTO = { password, email, name, surname, role };
    return await this.authService.register(user);
  }
}
