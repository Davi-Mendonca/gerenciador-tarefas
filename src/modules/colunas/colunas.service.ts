import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ColunasService {
  constructor(private prisma: PrismaClient) {}

  async criar(data: any) {
    try {
        const coluna = await this.prisma.coluna.create({ data });
        return coluna;
    } catch (error) {
        throw error;   
    }
  }

  async listar() {
    const colunas = await this.prisma.coluna.findMany({
      include: {tarefas: true}
    });
    return colunas;
  }

  async buscarColuna(id: string) {
    const coluna = await this.prisma.coluna.findUnique({
        where: {id},
        include: {tarefas: true}
    })
    if(!coluna) {
        throw new HttpException(
            '',
            HttpStatus.NO_CONTENT
        )
    }
    return coluna;
  }

  async atualizar(id: string, data: any) {
    const coluna = await this.prisma.coluna.findUnique({
        where: {id},
        include: { tarefas:true }
    })
    console.log('tarefas: ', coluna['tarefas'])
    if (!coluna) {
        throw new HttpException(
            '',
            HttpStatus.NO_CONTENT
        )
    }
    return await this.prisma.coluna.update({
        data,
        where: {id}
    })
  }

  async deletar(id: string) {
    const coluna = await this.prisma.coluna.findUnique({
        where: {id}
    })
    if (!coluna) {
        throw new HttpException(
            '',
            HttpStatus.NO_CONTENT
        )
    } else if (coluna['tarefas']) {
        throw new HttpException(
            'A coluna possui tarefas vinculadas.\nExclua primeiro todas as tarefas vinculadas.',
            HttpStatus.UNPROCESSABLE_ENTITY
        )
    }
    return this.prisma.coluna.delete({
        where: {id}
    })
  }
}
