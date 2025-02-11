import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ContatosWppModule } from './contatos_wpp/contatos-wpp.module';
import { PrismaModule } from './prisma/prisma.module';
import { TiposVeiculosModule } from './tipos-veiculos/tipos-veiculos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { VeiculosModule } from './veiculos/veiculos.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    UsuariosModule,
    ContatosWppModule,
    VeiculosModule,
    TiposVeiculosModule,
  ],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
