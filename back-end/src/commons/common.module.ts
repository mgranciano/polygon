import { Module } from '@nestjs/common';
import { CsvModule } from 'nest-csv-parser';

@Module({
    providers: [],
    exports: [],
    imports: [CsvModule]
})
export class CommonModule { }