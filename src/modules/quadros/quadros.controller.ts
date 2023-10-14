import { Controller, Body, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { QuadrosService } from './quadros.service';

@Controller('quadros')
export class QuadrosController {
  constructor(private service: QuadrosService) {}

  @Post()
  criarQuadro(@Body() data: any) {
    return this.service.criar(data);
  }

  @Get()
  listarQuadros() {
    return this.service.listar();
  }
}
