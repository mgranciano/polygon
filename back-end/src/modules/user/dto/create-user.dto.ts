import { Field, InputType } from "@nestjs/graphql";
import { AppRoles } from "../../../commons/constants";
import { EnumToString } from "../../../commons/helpers/enumToString";

  @InputType()
  export class CreateUserDto {
    @Field({description: 'User name'})
    name: string;
    @Field({ description: 'Last name', nullable: true })
    lastName: string;
    @Field({ description: 'email input for login'})
    email: string;
    @Field({ description: 'password input for login'})
    password: string;
    roles: string[];
  }
