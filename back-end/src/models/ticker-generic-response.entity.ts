import { Field, Int, ObjectType } from "@nestjs/graphql"
import { InfoTicker } from "./info-ticker.entity"

@ObjectType()
export class Data {
    @Field()
    ticker: string
    @Field()
    name: string
    @Field()
    market: string
    @Field()
    locale: string
    @Field()
    primary_exchange: string
    @Field()
    type: string
    @Field(() => Boolean)
    active: boolean
    @Field()
    currency_name: string
    @Field()
    cik: string
    @Field()
    composite_figi: string
    @Field()
    share_class_figi: string
    @Field()
    last_updated_utc: string
}

@ObjectType()
export class TickerGenericResponse {
    @Field(() => Int)
    count: number
    @Field()
    next_url: string
    @Field()
    request_id: string
    @Field(() => [Data], { nullable: true })
    results?: Data[]
    @Field()
    status: string
    @Field({ nullable: true })
    error?: string
}

@ObjectType()
export class TickerCompleteData {
    @Field(() => [ResultData])
    results: ResultData[]
}

@ObjectType()
export class ResultData extends Data {
    @Field(() => InfoTicker, { nullable: true })
    info_ticker?: InfoTicker
}