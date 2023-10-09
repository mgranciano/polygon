import { Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { Stock } from '../../models';
import { StockService } from './stock.service';


@Resolver()
export class StockResolver {

    constructor(private stockService: StockService){}

    @Query((returns) => [Stock])
    Stock(){
        return this.stockService.findAll();
    }
}
