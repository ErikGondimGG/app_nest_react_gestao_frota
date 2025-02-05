import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { VeiculosModule } from './veiculos/veiculos.module';

@Module({
  imports: [PrismaModule, VeiculosModule],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
