import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EnvModule} from './env/env.module';
import { ShoesModule } from './shoes/shoes.module';
import { DbModule } from './db/db.module';
import {LoggerModule} from './logging/logger.module'
 
@Module({
  imports: [EnvModule,
    DbModule.forRootAsync(),
    LoggerModule.forRoot(),
    ShoesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
