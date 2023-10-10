
import { Args, Query, Resolver } from '@nestjs/graphql';

import { AppResource } from '../../commons/constants';
import { Auth } from '../../commons/decorators';
import { MarketService } from './market.service';
import { AggregatesResponse , HistoryRequest, InfoTicker, TickerGenericResponse} from '../../models';

@Resolver()
export class MarketResolver {

  constructor(private readonly marketService: MarketService) {}

  @Query(() => InfoTicker)
  async getRealTimeData(@Args({ name: 'ticker', type: () => String, description: 'input instrument' }) input: string) {
    return await this.marketService.getRealTimeData(input);
  }

  @Query(() => AggregatesResponse)
  async getHistoryTimeData(@Args({ name: 'input', type: () => HistoryRequest ,description: 'input data ticker, start date  and end date for search' }) input: HistoryRequest) {
    return await this.marketService.getHistoryData(input);
  }

  @Query(() => TickerGenericResponse)
  async getAllTicker() {
    return this.marketService.getAllTicker();
  }
}
