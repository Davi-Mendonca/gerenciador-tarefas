import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prismaService';

@Injectable()
export class TarefasService {
    constructor(private prisma: PrismaService) {}

    async criar(data: any): Promise<any> {
        try {
            const tarefa = await this.prisma.tarefa.create({data});
            return tarefa;
        } catch (error) {
            throw error;
        }
    }
    
    async listar() {
        try {
            const tarefas = await this.prisma.tarefa.findMany()
            return tarefas;
        } catch (error) {
            throw error;
        }
    }

    async buscar(id: string): Promise<any> {
        try {
            const tarefa: any = await this.prisma.tarefa.findFirst({
                where: {
                    id: id
                }
            })

            if (!tarefa) {
                throw new HttpException(
                    `Tarefa de id: ${id} não encontrada.`, 
                    HttpStatus.NO_CONTENT
                )
            } 
            
            return tarefa;
        } catch (error) {
            throw error;
        }
    }

    async atualizar(id: string, data: any): Promise<any> {
        try {
            const tarefa = await this.prisma.tarefa.findUnique({
                where: {id}
            })
            if (!tarefa) {
                throw new HttpException(
                    '',
                    HttpStatus.NO_CONTENT
                )
            }
            return this.prisma.tarefa.update({
                data,
                where: {id}
            })
        } catch (error) {
             throw error;
        }
    }

    async deletar(id: string): Promise<any> {
        try {
            const tarefa = await this.prisma.tarefa.findUnique({
                where: {id}
            })
            if (!tarefa) {
                throw new HttpException(
                    '',
                    HttpStatus.NO_CONTENT
                )
            }
            return this.prisma.tarefa.delete({
                where: {id}
            })
        } catch (error) {
            throw error;
        }
    }
}
