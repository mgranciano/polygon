import { Module } from '@nestjs/common';
import { CsvModule } from 'nest-csv-parser';

import { CsvUtils } from './helpers/csvUtils';
import { AxiosAdapter } from './adapters/axios.adapter';

@Module({
    providers: [CsvUtils, AxiosAdapter],
    exports: [CsvUtils, AxiosAdapter],
    imports: [CsvModule]
})
export class CommonModule { }