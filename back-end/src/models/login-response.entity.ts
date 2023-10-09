import { ArgsType, Field, InputType, ObjectType } from "@nestjs/graphql";
import { User } from "./user.entity";

@ObjectType()
export class LoginResponse{
    @Field()
    message: string;

    @Field({nullable:true})
    accessToken?: string;

    @Field(() => User,{nullable:true})
    data: User

}


//@ObjectType()
@InputType()
export class LoginResponseDto{
    @Field()
    email: string;
    @Field()
    password: string;
}