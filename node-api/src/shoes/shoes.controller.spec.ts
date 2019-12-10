import { Test, TestingModule } from '@nestjs/testing';
import { ShoesController } from './shoes.controller';
import { ShoesRepository } from '../db/repositories/shoes.resository';

describe('Shoes Controller', () => {
  let controller: ShoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoesController],
      providers: [{
        provide:'stockx',
        useValue: {}},
        {
          provide: ShoesRepository,
          useValue: new ShoesRepository()
        }
      ]
    }).compile();

    controller = module.get<ShoesController>(ShoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
