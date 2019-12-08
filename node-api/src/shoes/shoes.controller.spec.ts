import { Test, TestingModule } from '@nestjs/testing';
import { ShoesController } from './shoes.controller';

describe('Shoes Controller', () => {
  let controller: ShoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoesController],
    }).compile();

    controller = module.get<ShoesController>(ShoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
