import { Controller, Get, Post,Body, Param } from '@nestjs/common';
import {ShoesRepository} from '../db/repositories/shoes.resository';
import { Shoes } from 'src/db/entities/shoes.entity';

@Controller('shoes')
export class ShoesController {
    constructor(private shoesRepository: ShoesRepository){
        
    }

    @Get()
    async getShoes(){
        return await this.shoesRepository.find({relations:['trueToSize']})
          .then(shoes=>shoes);
    }

    @Post('/new')
    async writeShoes(@Body('name') name:string){
      return await this.shoesRepository.createShoes(name).then(id=>id);
    }

    @Post('/update/:id')
    async updateShoes(@Param('id') id:string, @Body('trueToSizes') sizes:number []){
      await this.shoesRepository.findOne(id,{relations:['trueToSize']}).then(
        async shoes=>{
            shoes.trueToSize.sizes = sizes;
            shoes.trueToSize.averageSize = 
              sizes.reduce((previous,current)=>previous+current,0)/sizes.length;
            await this.shoesRepository.save(shoes);
        }
      )
    }
}
