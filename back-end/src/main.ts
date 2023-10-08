import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

import {
  RADIX_BASE,
  SERVER_PORT,
  SERVER_PORT_DEFAULT,
  SERVER_PREFIX,
  SERVER_PREFIX_DEFAULT
} from './commons/constants';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  const logger = new Logger('PolygonService');

  const port = parseInt(config.get<string>(SERVER_PORT), RADIX_BASE) || SERVER_PORT_DEFAULT;
  const prefix = config.get<string>(SERVER_PREFIX) || SERVER_PREFIX_DEFAULT;
  app.setGlobalPrefix(prefix);

  await app.listen(port);
  logger.log(`Server is running at ${await app.getUrl()}`);
}
bootstrap();
