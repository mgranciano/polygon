import { Args, ArgsType, Context, Field, InputType, Int, Mutation, ObjectType, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { Stock } from '../../models';
import { StockService } from './stock.service';


//@InputType("PaginationArgs")
//@ObjectType("PaginationArgs")
@ArgsType()
export class PaginationArgs {
  @Field(() => Int , { nullable: true })
  offset?: number;

  @Field(() => Int ,{ nullable: true })
  limit?: number;
}

//Stock( @Args() pagination: PaginationArgs ){


@Resolver()
export class StockResolver {

    constructor(private stockService: StockService) { }

    @Query(() => [Stock])
    Stock(){
        return this.stockService.findAll();
    }

    @Mutation(() => [Stock], { name: 'getAll' })
    createStock(@Args({ name: 'limit', type: () => Int, nullable: true }) limit: number,
                @Args({ name: 'offset', type: () => Int, nullable: true }) offset: number){
        console.log(limit)
        console.log(offset)
        return this.stockService.find(limit,offset);
    }
}
