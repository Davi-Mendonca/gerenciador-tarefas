import { Module } from '@nestjs/common';
import { ColunasService } from './colunas.service';
import { ColunasController } from './colunas.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [ColunasController],
  providers: [ColunasService, PrismaClient],
})
export class ColunasModule {}
