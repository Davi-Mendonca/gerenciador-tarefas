import { Module } from '@nestjs/common';
import { CadastroService } from './cadastro.service';
import { PrismaClient } from '@prisma/client';
import { CadastroController } from './cadastro.controller';

@Module({
  controllers: [CadastroController],
  providers: [CadastroService, PrismaClient],
})
export class CadastroModule {}
