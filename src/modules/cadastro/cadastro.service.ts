import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const bcrypt = require('bcrypt');

@Injectable()
export class CadastroService {
    constructor(private prisma: PrismaClient){}

    async cadastrar(data: any) {
        if (!data) {
            throw new HttpException('Parametros inválidos.', HttpStatus.BAD_REQUEST)
        }

        const email = data.email;
        const result = await this.prisma.usuario.findUnique({
            where: {email}
        })
        console.log('result: ', result)
        if (result) {
            throw new HttpException('Usuário já cadastrado.', HttpStatus.CONFLICT)
        }

        if (data.senha) {
            data.senha = await bcrypt.hash(data.senha, 15)
        }
        const usuario = this.prisma.usuario.create({data});

        return usuario;
    }

    async buscarPorEmail(email: string) {
        const usuario = this.prisma.usuario.findUnique({
            where:{email}
        });

        return usuario;
    }

    async buscarQuadros(id: string) {
        const usuario = this.prisma.usuario.findUnique({
            where:{id},
            include:{
                quadros: {
                    orderBy: {
                        createdAt: 'asc', // ou 'desc' para descendente
                    },
                    include: {
                        colunas: {
                            orderBy: {
                                createdAt: 'asc', // ou 'desc' para descendente
                            },
                            include: {
                                tarefas: {
                                    orderBy: {
                                        createdAt: 'asc', // ou 'desc' para descendente
                                    },
                                }
                                
                            }
                        }
                    }
                }
            },
            
        })

        return usuario;
    }

    async atualizar(email: string, data: any) {
        if (data['senha']) {
            data.senha = await bcrypt.hash(data.senha, 15)
        }
        const usuario = this.prisma.usuario.update({
            data,
            where: {email}
        })

        return usuario;
    }

    async deletar(email: string) {
        const usuario = this.prisma.usuario.delete({
            where: {email}
        })

        return usuario['id']
    }
}
