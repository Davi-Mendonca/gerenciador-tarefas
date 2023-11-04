import { Module } from '@nestjs/common';
import { QuadrosService } from './quadros.service';
import { QuadrosController } from './quadros.controller';
import { PrismaClient } from '@prisma/client';
import { ColunasService } from '../colunas/colunas.service';

@Module({
  controllers: [QuadrosController],
  providers: [QuadrosService, PrismaClient, ColunasService],
})
export class QuadrosModule {}
