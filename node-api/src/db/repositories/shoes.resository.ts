import { Shoes } from '../entities/shoes.entity'
import { EntityRepository, Repository } from 'typeorm';
import { TrueToSize } from '../entities/shoes.true-size.entity';

@EntityRepository(Shoes)
export class ShoesRepository extends Repository<Shoes> {
    createShoes= async (shoesName: string) => {
      var trueToSize = new TrueToSize();
      trueToSize.averageSize =0;
      trueToSize.sizes=[];
      var shoes =new Shoes();
      shoes.name = shoesName;
      trueToSize.shoes = shoes;
      shoes.trueToSize= trueToSize;
      await this.save(shoes);
      return shoes.id;
      };
}