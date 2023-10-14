import { Test, TestingModule } from '@nestjs/testing';
import { QuadrosController } from '../quadros.controller';
import { QuadrosService } from '../quadros.service';

describe('QuadrosController', () => {
  let controller: QuadrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuadrosController],
      providers: [QuadrosService],
    }).compile();

    controller = module.get<QuadrosController>(QuadrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
