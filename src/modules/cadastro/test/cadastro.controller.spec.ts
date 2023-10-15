import { Test, TestingModule } from '@nestjs/testing';
import { CadastroController } from '../cadastro.controller';
import { CadastroService } from '../cadastro.service';

describe('CadastroController', () => {
  let controller: CadastroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CadastroController],
      providers: [CadastroService],
    }).compile();

    controller = module.get<CadastroController>(CadastroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
