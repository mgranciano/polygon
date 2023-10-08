import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommonModule } from '../../commons/common.module';
import { Stock } from 'src/models';
import { StockService } from './stock.service';
import { StockResolver } from './stock.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Stock]), CommonModule],
  providers: [StockService, StockResolver],
  exports: [StockService],
})
export class StockModule {}
