import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import * as Joi from '@hapi/joi';

import { MssqlService } from './providers/mssql.service';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    validationSchema: Joi.object({
      NODE_ENV: Joi.string()
        .valid('development', 'production')
        .default('development')
    }),
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useClass: MssqlService,
    inject: [ConfigService],
  }),
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
 }
