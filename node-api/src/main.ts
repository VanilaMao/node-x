import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {EnvConfigService} from "./env/env.config.service";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: EnvConfigService = app.get(EnvConfigService);
   app.enableCors({origin:true});

   const options = new DocumentBuilder()
    .setTitle('Shoes API')
    .setDescription('Swagger')
    .setVersion('1.0')
    .addTag('shoes')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(configService.getEnv().port);
}
bootstrap();
