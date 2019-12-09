import { Controller, Get, Post,Body, Param, Inject, LoggerService } from '@nestjs/common';
import {ShoesRepository} from '../db/repositories/shoes.resository';
import { ApiBody } from '@nestjs/swagger';

@Controller('shoes')
export class ShoesController {
    constructor(
      @Inject('stockx') private logger,
      private shoesRepository: ShoesRepository){
      }

    @Get()
    async getShoes(){
        return await this.shoesRepository.find({relations:['trueToSize']})
          .then(shoes=>shoes);
    }


    @Post('/new')
    @ApiBody({
      schema:{
        type:"string",
        nullable:false,
        example:'Nike 2019 limited'
      }   
    })
    async writeShoes(@Body('name') name:string){
      return await this.shoesRepository.createShoes(name).then(async id=>this.getShoesById(id));
    }

    async getShoesById(id:string){
      return await this.shoesRepository.findOne(id,{relations:['trueToSize']}).then(shoes=>shoes);
    }

    @Post('/update/:id')
    @ApiBody({
      schema:{
        type:"array",
        example:'"trueToSizes":[1,2,3,4,5]'
      }   
    })
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
