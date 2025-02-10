import { Module } from '@nestjs/common';
import { VeiculosController } from './controllers/veiculos.controller';
import { PrismaVeiculosRepository } from './repositories/prisma/prisma-veiculos.repository';
import { VeiculosRepository } from './repositories/veiculos.repository';
import { CreateVeiculoUseCase } from './use-cases/create-veiculo.use-case';
import { DeleteVeiculoUseCase } from './use-cases/delete-veiculo.use-case';
import { ReadVeiculosUseCase } from './use-cases/read-veiculos.use-case';
import { UpdateVeiculoUseCase } from './use-cases/update-veiculo.use-case';

@Module({
  providers: [
    {
      provide: VeiculosRepository,
      useClass: PrismaVeiculosRepository,
    },
    CreateVeiculoUseCase,
    ReadVeiculosUseCase,
    UpdateVeiculoUseCase,
    DeleteVeiculoUseCase,
  ],
  controllers: [VeiculosController],
  exports: [
    CreateVeiculoUseCase,
    ReadVeiculosUseCase,
    UpdateVeiculoUseCase,
    DeleteVeiculoUseCase,
  ],
})
export class VeiculosModule {}
