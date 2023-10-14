import {
  Controller,
  Body,
  Post,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ColunasService } from './colunas.service';

@Controller('colunas')
export class ColunasController {
  constructor(private service: ColunasService) {}

  @Post()
  criarColuna(@Body() data: any) {
    return this.service.criar(data);
  }

  @Get()
  listarColunas() {
    return this.service.listar();
  }

  @Get(':id')
  buscarColuna(@Param('id') id: string) {
    return this.service.buscarColuna(id);
  }

  @Put(':id')
  atualizarColuna(@Param('id') id: string, @Body() data: any) {
    return this.service.atualizar(id, data);
  }

  @Delete(':id')
  deletarColuna(@Param('id') id: string) {
    return this.service.deletar(id);
  }
}
