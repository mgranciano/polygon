import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { PaginationArgs, Stock } from '../../models';
import { StockService } from './stock.service';

@Resolver()
export class StockResolver {

    constructor(private stockService: StockService) { }

    @Query(() => [Stock])
    Stock(){
        return this.stockService.findAll();
    }

    @Mutation(() => [Stock], { name: 'getAll' })
    CheckStock(@Args({ name: 'input', type: () => PaginationArgs }) input){
        const { limit, offset } = input;
        return this.stockService.find(limit,offset);
    }
}
