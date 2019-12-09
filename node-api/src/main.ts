import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {EnvConfigService} from "./env/env.config.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: EnvConfigService = app.get(EnvConfigService);
  app.enableCors();
  await app.listen(configService.getEnv().port);
}
bootstrap();
