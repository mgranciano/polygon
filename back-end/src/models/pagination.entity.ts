import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class PaginationArgs {
    @Field(() => Int,  { nullable: true } )
    limit: string;
    @Field(() => Int,  { nullable: true } )
    offset: string;
}