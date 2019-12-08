import { Module } from '@nestjs/common';
import { ShoesController } from './shoes.controller';
import {ShoesRepository} from '../db/repositories/shoes.resository';
import { DbModule } from 'src/db/db.module';

@Module({
  imports:[DbModule.forFeature([ShoesRepository])],
  controllers: [ShoesController]
})
export class ShoesModule {}
