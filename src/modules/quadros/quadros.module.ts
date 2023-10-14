import { Module } from '@nestjs/common';
import { QuadrosService } from './quadros.service';
import { QuadrosController } from './quadros.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [QuadrosController],
  providers: [QuadrosService, PrismaClient],
})
export class QuadrosModule {}
