import { Field, Float, InputType, Int, ObjectType } from "@nestjs/graphql"
import { GraphQLFloat } from "graphql"

@ObjectType()
export class Result {
    @Field(() => Number, { nullable: true })
    v: number
    @Field(() => Number, { nullable: true })
    vw: number
    @Field(() => Number, { nullable: true })
    o: number
    @Field(() => Number, { nullable: true })
    c: number
    @Field(()=> Number, { nullable: true })
    h: number
    @Field(() => Number, { nullable: true })
    l: number
    @Field(() => Number, { nullable: true })
    t: number
    @Field(() => Number, { nullable: true })
    n: number
}

@ObjectType()
export class AggregatesResponse {
    @Field()
    ticker: string
    @Field(() => Int)
    queryCount: number
    @Field(() => Int)
    resultsCount: number
    @Field({ nullable: true })
    adjusted?: boolean
    @Field(() => [Result], { nullable: true })
    results?: Result[]
    @Field()
    status: string
    @Field()
    request_id: string
    @Field(() => Int)
    count: number
    @Field({ nullable: true })
    error?: string
}


@InputType()
export class HistoryRequest {
    @Field({description: 'ticker select '})
    ticket: string;
    @Field({description: 'start date in format YYYY-MM-DD'})
    start: string;
    @Field({description: 'end date in format YYYY-MM-DD'})
    end: string;
}