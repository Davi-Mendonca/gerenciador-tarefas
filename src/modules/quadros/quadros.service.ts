import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class QuadrosService {
    constructor(private prisma: PrismaClient){}

    async criar(data: any) {
        const quadro = await this.prisma.quadro.create({
            data,
            include: {
                colunas: true
            }
        })

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
