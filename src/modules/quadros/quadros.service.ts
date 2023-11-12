import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ColunasService } from '../colunas/colunas.service';

@Injectable()
export class QuadrosService {
    constructor(
        private prisma: PrismaClient,
        private colunaService: ColunasService
    ){}

    async criar(data: any) {
        const quadro = await this.prisma.quadro.create({
            data,
            include: {
                colunas: true
            }
        })

        await this.colunaService.criar({
            nome: "Backlog",
            idQuadro: quadro.id
        })

        await this.colunaService.criar({
            nome: "Em progresso",
            idQuadro: quadro.id
        })

        await this.colunaService.criar({
            nome: "Finalizado",
            idQuadro: quadro.id
        })

        if (quadro) {
            return await this.prisma.quadro.findUnique({
                where: {id: quadro.id},
                include: {
                    colunas: true
                }
            })
        }

        return quadro;
    }

    async buscar(id: string) {
        const quadro = await this.prisma.quadro.findUnique({
            where: {id},
            include: {
                colunas: {
                    include: {tarefas: true}
                }
            }
        })

        if(!quadro) throw new HttpException(null, HttpStatus.NO_CONTENT)

        return quadro;
    }

    async listar() {
        const quadros = await this.prisma.quadro.findMany({
            include: {
                colunas: {
                    include: {tarefas: true}
                }
            }
        })

        return quadros;
    }
}
