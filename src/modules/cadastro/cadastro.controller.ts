import { Controller, Post, Get, Body, Delete } from '@nestjs/common';
import { CadastroService } from './cadastro.service';

@Controller('cadastro')
export class CadastroController {
  constructor(private service: CadastroService) {}

  @Post()
  cadastrarUsuario(@Body() data: any) {
    return this.service.cadastrar(data);
  }

  @Get()
  buscarUsuario(@Body('email') email: string) {
    return this.service.buscarPorEmail(email);
  }

  @Delete()
  deletarUsusario(@Body('email') email: string) {
    return this.service.deletar(email);
  }
}
