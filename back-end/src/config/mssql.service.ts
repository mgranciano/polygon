import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { join } from 'path';

import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER, RADIX_BASE } from '../commons/constants';

@Injectable()
export class MssqlConfigService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) { }
    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {

        return {
            type: 'mssql',
            host: this.configService.get<string>(DB_HOST),
            username: this.configService.get<string>(DB_USER),
            password: this.configService.get<string>(DB_PASS),
            port: parseInt(this.configService.get<string>(DB_PORT), RADIX_BASE),
            database: this.configService.get<string>(DB_NAME),
            entities: [join(__dirname, '../**/*entity{.ts,.js}')],
            synchronize: true,
            logging: true,
            logger: 'simple-console',
            options: { encrypt: false }
        }
    }
}