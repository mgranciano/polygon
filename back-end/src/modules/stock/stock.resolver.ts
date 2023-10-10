import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { PaginationArgs, Stock } from '../../models';
import { StockService } from './stock.service';
import { Auth } from '../../commons/decorators';
import { AppResource } from '../../commons/constants';

@Resolver()
export class StockResolver {

    constructor(private stockService: StockService) { }

    @Auth({
        possession: 'own',
        action: 'read',
        resource: AppResource.USER,
    })
    @Query(() => [Stock])
    Stock() {
        return this.stockService.findAll();
    }

    @Auth({
        possession: 'own',
        action: 'read',
        resource: AppResource.USER,
    })
    @Mutation(() => [Stock], { name: 'getAll' })
    CheckStock(@Args({ name: 'input', type: () => PaginationArgs }) input) {
        const { limit, offset } = input;
        return this.stockService.find(limit, offset);
    }
    @Mutation((returns) => [Stock])
    createStock(@Args({ name: 'fileName', type: () => String }) fileName: string ){
        return this.stockService.createBulkStock(fileName);
    }
}
