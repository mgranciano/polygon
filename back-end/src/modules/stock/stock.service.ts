import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stock } from 'src/models';
import { Repository } from 'typeorm';

@Injectable()
export class StockService {

    constructor(
        @InjectRepository(Stock) private postsRepository: Repository<Stock>,
    ) { }

    findAll(): Promise<Stock[]> {
        return this.postsRepository.find();
    }
    async find(limit?: number, offset: number =0 ): Promise <Stock[]> {

        const[data, total] = await this.postsRepository.findAndCount({
            order: {
                id: "ASC",
            },
            take: limit,
            skip: offset === 0? offset : limit * offset
        })

        return data;
    }
}
