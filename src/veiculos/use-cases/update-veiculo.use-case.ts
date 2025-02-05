import { Injectable } from '@nestjs/common';
import { VeiculosInputDto } from '../dtos/veiculos-input.dto';
import { VeiculosRepository } from '../repositories/veiculos.repository';

interface IUpdateVeiculosInputDto {
  id: number;
  veiculosInputDto: VeiculosInputDto;
}

@Injectable()
export class UpdateVeiculoUseCase {
  constructor(private readonly veiculosRepository: VeiculosRepository) {}

  async execute({ id, veiculosInputDto }: IUpdateVeiculosInputDto) {
    const updatedRecord = await this.veiculosRepository.update(
      id,
      veiculosInputDto,
    );

    return updatedRecord;
  }
}
