import { Body, Controller, Post, Get, Put, Delete, Param } from '@nestjs/common';
import { TarefasService } from './tarefas.service';

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly service: TarefasService) {}

  @Post()
  async criar (@Body() data: any) {
    return this.service.criar(data);
  }

  @Get()
  async listarTarefas() {
    return this.service.listar();
  }

  @Get(':id')
  async buscarTarefa(@Param('id') id: string): Promise<any> {
    return this.service.buscar(id);
  }

  @Put(':id')
  async atualizarTarefa(@Param('id') id: string, @Body() data: any): Promise<any> {
    return this.service.atualizar(id, data);
  }

  @Delete(':id')
  async deletarTarefa(@Param('id') id: string) {
    return this.service.deletar(id);
  }
}
