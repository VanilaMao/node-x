import { Controller, Get, Post,Body, Param } from '@nestjs/common';
import {ShoesRepository} from '../db/repositories/shoes.resository';

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
      return await this.shoesRepository.createShoes(name).then(async id=>this.getShoesById(id));
    }

    async getShoesById(id:string){
      return await this.shoesRepository.findOne(id,{relations:['trueToSize']}).then(shoes=>shoes);
    }

    @Post('/update/:id')
    async updateShoes(@Param('id') id:string, @Body('trueToSizes') sizes:number []){
      return await this.shoesRepository.findOne(id,{relations:['trueToSize']}).then(
        async shoes=>{
            shoes.trueToSize.sizes = sizes;
            shoes.trueToSize.averageSize = 
            sizes.reduce((previous,current)=>previous+current,0)/sizes.length;
            return await this.shoesRepository.save(shoes).then(shoes=>shoes);
        }
      )
    }
}
