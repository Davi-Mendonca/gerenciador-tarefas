import { Controller, Body, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { QuadrosService } from './quadros.service';

@Controller('quadros')
export class QuadrosController {
  constructor(private service: QuadrosService) {}

  @Post()
  criarQuadro(@Body() data: any) {
    return this.service.criar(data);
  }

  @Get(':id')
  buscarQuadro(@Param('id') id: string) {
    return this.service.buscar(id);
  }

  @Get()
  listarQuadros() {
    return this.service.listar();
  }

  @Put(':id')
  atualizarQuadro(@Param('id') id: string, @Body() data: any) {
    return this.service.atualizar(id, data);
  }

  @Delete(':id')
  deletarQuadro(@Param('id') id: string) {
    return this.service.deletar(id);
  }
}
