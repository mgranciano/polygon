import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CsvUtils } from '../../commons/helpers/csvUtils';
import { Stock } from '../../models';


@Injectable()
export class StockService {

    constructor(
        @InjectRepository(Stock) private postsRepository: Repository<Stock>,
        private readonly csvUtil: CsvUtils,
    ) { }

    findAll(): Promise<Stock[]> {
        return this.postsRepository.find();
    }
    async find(limit?: number, offset: number = 0): Promise<Stock[]> {

        const [data, total] = await this.postsRepository.findAndCount({
            order: {
                id: "ASC",
            },
            take: limit,
            skip: offset === 0 ? offset : limit * offset
        })

        return data;
    }


    async createBulkStock(fileName: string): Promise<Stock[]> {

        const data = await this.csvUtil.parseCsvToArray(fileName);
        this.postsRepository.clear();
        for (const stock of data.list) {
            try {
                const newStock = this.postsRepository.create(stock);
                await this.postsRepository.save(newStock);
            } catch (error) {
                console.log(stock)
            }
        }
        return this.postsRepository.find();
    }
}
 