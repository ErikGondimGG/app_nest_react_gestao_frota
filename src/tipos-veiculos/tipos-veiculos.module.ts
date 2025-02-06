import { Module } from '@nestjs/common';
import { TiposVeiculosController } from './controllers/tipos-veiculos.controller';
import { PrismaTiposVeiculosRepository } from './repositories/prisma/prisma-tipos-veiculos.repository';
import { TiposVeiculosRepository } from './repositories/tipos-veiculos.repository';
import { CreateTiposVeiculosUseCase } from './use-cases/create-tipo-veiculo.use-case';
import { DeleteTiposVeiculosUseCase } from './use-cases/delete-tipo-veiculo.use-case';
import { ReadTiposVeiculosUseCase } from './use-cases/read-tipos-veiculo.use-case';
import { UpdateTiposVeiculosUseCase } from './use-cases/update-tipo-veiculo.use-case';

@Module({
  controllers: [TiposVeiculosController],
  providers: [
    {
      provide: TiposVeiculosRepository,
      useClass: PrismaTiposVeiculosRepository,
    },
    CreateTiposVeiculosUseCase,
    ReadTiposVeiculosUseCase,
    UpdateTiposVeiculosUseCase,
    DeleteTiposVeiculosUseCase,
  ],
})
export class TiposVeiculosModule {}
