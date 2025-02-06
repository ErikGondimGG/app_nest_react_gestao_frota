import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TiposVeiculosModule } from './tipos-veiculos/tipos-veiculos.module';
import { VeiculosModule } from './veiculos/veiculos.module';

@Module({
  imports: [PrismaModule, VeiculosModule, TiposVeiculosModule],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
