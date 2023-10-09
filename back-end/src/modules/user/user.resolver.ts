import { Context, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { User } from "../../models";

import { AppResource } from "../../commons/constants";
import { Auth } from "../../commons/decorators";


@Resolver()
export class UserResolver {

  constructor(private userService: UserService){}
  
  @Auth({
    possession: 'own',
    action: 'read',
    resource: AppResource.USER,
  })
  @Query((returns) => [User])
  Users(@Context() context: any,){
    return this.userService.findAll();
  }
}
