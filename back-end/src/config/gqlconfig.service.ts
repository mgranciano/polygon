import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';

import { join } from 'path';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
    createGqlOptions(): ApolloDriverConfig {
        return {
            autoSchemaFile: join(process.cwd(), 'src/modules/schema.gql'),
            context: ({ req, res }): any => ({ req, res }),
        };
    }
}