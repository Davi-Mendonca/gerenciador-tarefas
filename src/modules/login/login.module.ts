import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { PrismaClient } from '@prisma/client';
import { CadastroService } from '../cadastro/cadastro.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService, PrismaClient, CadastroService]
})
export class LoginModule {}
