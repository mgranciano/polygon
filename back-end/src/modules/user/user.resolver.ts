import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { User } from "../../models";

import { AppResource, AppRoles } from "../../commons/constants";
import { Auth } from "../../commons/decorators";
import { CreateUserDto } from "./dto";


@Resolver()
export class UserResolver {

  constructor(private userService: UserService) { }

  @Auth({
    possession: 'own',
    action: 'read',
    resource: AppResource.USER,
  })
  @Query((returns) => [User])
  Users(@Context() context: any,) {
    return this.userService.findAll();
  }

  @Auth({
    possession: 'own',
    action: 'create',
    resource: AppResource.USER,
  })
  @Mutation(() => User, { name: 'newUser' })
    async createUser(@Args({ name: 'input', type: () => CreateUserDto }) input) {

        const { email, password } = input;
        
        const data = await this.userService.createOne({
          ...input,
          roles: [AppRoles.USER],
        });

        return data
    }
}
