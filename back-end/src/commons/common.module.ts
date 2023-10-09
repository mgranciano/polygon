import { Module } from '@nestjs/common';
import { CsvModule } from 'nest-csv-parser';

import { CsvUtils } from './helpers/csvUtils';

@Module({
    providers: [CsvUtils],
    exports: [CsvUtils],
    imports: [CsvModule]
})
export class CommonModule { }