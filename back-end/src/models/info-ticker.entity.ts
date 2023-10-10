import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class InfoTicker {
    @Field()
    logo: string;
    @Field()
    ticker: string;
    @Field()
    name: string;
    @Field({nullable:true})
    companyDescription?: string;
    @Field(() => Number)
    closePrice: number;
    @Field(()=> Number)
    highestPrice: number;
    @Field(()=> Number)
    lowestPrice: number;
    @Field(()=> Number)
    openPrice: number;
    @Field(()=> Number)
    tradingVolume: number;
    @Field()
    status: string;
    @Field({nullable:true})
    error?: string;
  }