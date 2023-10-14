import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './modules/login/login.module';
import { TarefasModule } from './modules/tarefas/tarefas.module';
import { ColunasModule } from './modules/colunas/colunas.module';
import { QuadrosModule } from './modules/quadros/quadros.module';

@Module({
  imports: [LoginModule, TarefasModule, ColunasModule, QuadrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
