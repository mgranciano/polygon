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
}
