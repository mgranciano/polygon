import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import * as Joi from '@hapi/joi';
import { AccessControlModule } from 'nest-access-control';

import { MssqlService } from './providers/mssql.service';
import { GqlConfigService } from './providers/gqlconfig.service';

import { StockModule } from './modules/stock/stock.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './modules/user/user.module';

import { roles } from './commons/roles';



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
  GraphQLModule.forRootAsync<ApolloDriverConfig>({
    driver: ApolloDriver,
    useClass: GqlConfigService,
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useClass: MssqlService,
    inject: [ConfigService],
  }),
  AccessControlModule.forRoles(roles),
  StockModule,
  UserModule,
  AuthModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {
  constructor(private dataSource: DataSource) { }
}
