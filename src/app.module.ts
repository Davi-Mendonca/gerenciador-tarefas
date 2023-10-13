import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './modules/login/login.module';
import { TarefasModule } from './modules/tarefas/tarefas.module';

@Module({
  imports: [LoginModule, TarefasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
