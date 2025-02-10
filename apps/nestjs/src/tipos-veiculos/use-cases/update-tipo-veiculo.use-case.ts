import { Injectable } from '@nestjs/common';
import { CreateUpdateTiposVeiculosInputDto } from '../dtos/create-update-tipos-veiculos-input.dto';
import { TiposVeiculosRepository } from '../repositories/tipos-veiculos.repository';
import { TiposVeiculosOutputDto } from '../types/tipos-veiculos-output.dto';

interface IUpdateTiposVeiculosInputDto {
  id: number;
  updateTiposVeiculosInputDto: CreateUpdateTiposVeiculosInputDto;
}

@Injectable()
export class UpdateTiposVeiculosUseCase {
  constructor(private tiposVeiculosRepository: TiposVeiculosRepository) {}

  async execute({
    id,
    updateTiposVeiculosInputDto,
  }: IUpdateTiposVeiculosInputDto): Promise<TiposVeiculosOutputDto> {
    const updatedRecord = await this.tiposVeiculosRepository.update(
      id,
      updateTiposVeiculosInputDto,
    );

    return updatedRecord;
  }
}
