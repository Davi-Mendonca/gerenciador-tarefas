import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const bcrypt = require('bcrypt');

@Injectable()
export class CadastroService {
    constructor(private prisma: PrismaClient){}

    async cadastrar(data: any) {
        if (data['senha']) {
            data.senha = await bcrypt.hash(data.senha, 15)
        }
        const usuario = this.prisma.ususario.create({data});

        return usuario;
    }

    async buscarPorEmail(email: string) {
        const usuario = this.prisma.ususario.findUnique({
            where:{email}
        });

        return usuario;
    }

    async buscarQuadros(id: string) {
        const usuario = this.prisma.ususario.findUnique({
            where:{id},
            include:{
                quadros: {
                    include: {
                        colunas: {
                            include: {
                                tarefas: true
                            }
                        }
                    }
                }
            }
        })

        return usuario;
    }

    async atualizar(email: string, data: any) {
        if (data['senha']) {
            data.senha = await bcrypt.hash(data.senha, 15)
        }
        const usuario = this.prisma.ususario.update({
            data,
            where: {email}
        })

        return usuario;
    }

    async deletar(email: string) {
        const usuario = this.prisma.ususario.delete({
            where: {email}
        })

        return usuario['id']
    }
}
