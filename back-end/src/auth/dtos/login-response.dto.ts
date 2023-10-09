import { ArgsType, Field, InputType, ObjectType } from "@nestjs/graphql";

@ArgsType()
@ObjectType()
@InputType()
export class LoginResponseDto1 {
    @Field()
    email: string;
    @Field()
    password: string;
  }