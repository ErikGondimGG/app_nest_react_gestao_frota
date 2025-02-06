import { Injectable } from '@nestjs/common';
import { CreateUpdateTiposVeiculosInputDto } from '../dtos/create-update-tipos-veiculos-input.dto';
import { TiposVeiculosRepository } from '../repositories/tipos-veiculos.repository';
import { TiposVeiculosOutputDto } from '../types/tipos-veiculos-output.dto';

interface ICreateTiposVeiculosInputDto {
  createTiposVeiculosInputDto: CreateUpdateTiposVeiculosInputDto;
}

@Injectable()
export class CreateTiposVeiculosUseCase {
  constructor(private tiposVeiculosRepository: TiposVeiculosRepository) {}

  async execute({
    createTiposVeiculosInputDto,
  }: ICreateTiposVeiculosInputDto): Promise<TiposVeiculosOutputDto> {
    const createdRecord = await this.tiposVeiculosRepository.create(
      createTiposVeiculosInputDto,
    );

    return createdRecord;
  }
}
