import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CadastroService } from '../cadastro/cadastro.service';
const bcrypt = require('bcrypt');

@Injectable()
export class LoginService {
  constructor(
    private prisma: PrismaClient,
    private cadastroService: CadastroService
  ) {}

  async login(email: string, senha: string) {
    const usuario = await this.cadastroService.buscarPorEmail(email);

    if (!usuario) throw new HttpException('Email não encontrado.', HttpStatus.NOT_FOUND)

    const result = await bcrypt.compare(senha, usuario.senha);

    if (result) {
        const response = await this.cadastroService.buscarQuadros(usuario.id)

        return {
            id: response[ 'id'],
            quadros: response['quadros']
        }
    } else {
        throw new HttpException(
            'Senha incorreta.',
            HttpStatus.FORBIDDEN
        )
    }
  }
}
