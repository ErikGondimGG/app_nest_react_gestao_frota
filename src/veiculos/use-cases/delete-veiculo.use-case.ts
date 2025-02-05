import { Injectable } from '@nestjs/common';
import { VeiculosRepository } from '../repositories/veiculos.repository';
import { VeiculosOutputDto } from '../types/veiculos-output.type';

interface IDeleteVeiculosInputDto {
  id: number;
}

@Injectable()
export class DeleteVeiculoUseCase {
  constructor(private readonly veiculosRepository: VeiculosRepository) {}

  async execute(id: number): Promise<VeiculosOutputDto> {
    return await this.veiculosRepository.delete(id);
  }
}
