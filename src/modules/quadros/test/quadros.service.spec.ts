import { Test, TestingModule } from '@nestjs/testing';
import { QuadrosService } from '../quadros.service';

describe('QuadrosService', () => {
  let service: QuadrosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuadrosService],
    }).compile();

    service = module.get<QuadrosService>(QuadrosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
