import { Body, Controller, Post, Get, Put, Delete, Param } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { TarefaDTO } from './dto/tarefa.dto';

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly service: TarefasService) {}

  @Post()
  async criar (@Body() data: TarefaDTO) {
    return this.service.criar(data);
  }

  @Get()
  async listarTarefas() {
    return this.service.listar();
  }

  @Get(':id')
  async buscarTarefa(@Param('id') id: string): Promise<TarefaDTO> {
    return this.service.buscar(id);
  }

  @Put(':id')
  async atualizarTarefa(@Param('id') id: string, @Body() data: TarefaDTO): Promise<TarefaDTO> {
    return this.service.atualizar(id, data);
  }

  @Delete(':id')
  async deletarTarefa(@Param('id') id: string) {
    return this.service.deletar(id);
  }
}
