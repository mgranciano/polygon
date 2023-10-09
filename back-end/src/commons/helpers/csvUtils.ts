
import { Injectable } from '@nestjs/common';
import { CsvParser } from 'nest-csv-parser';
import * as fs from 'fs';
import { Stock } from '../../models';

@Injectable()
export class CsvUtils {

  constructor(private readonly csvParser: CsvParser) {}

  async parseCsvToArray(fileName: string): Promise<any> {
    const filePath = `${process.cwd()}/data/${fileName}`;
    const stream = fs.createReadStream(filePath)
    const result = await this.csvParser.parse(stream, Stock,undefined,undefined,{ strict: true, separator: ',' });
    return result;
  }
}