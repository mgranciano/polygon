import { Module } from '@nestjs/common';

import { MarketService } from './market.service';
import { MarketResolver } from './market.resolver';
import { CommonModule } from '../../commons/common.module';

@Module({
    imports: [CommonModule, ],
    providers: [ MarketService, MarketResolver],
    exports: [],

})
export class MarketModule { }
