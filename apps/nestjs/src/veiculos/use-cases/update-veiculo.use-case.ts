import { Injectable } from '@nestjs/common';
import { CreateUpdateVeiculosInputDto } from '../dtos/create-update-veiculo-input.dto';
import { VeiculosRepository } from '../repositories/veiculos.repository';

interface IUpdateVeiculosInputDto {
  id: number;
  updateVeiculosInputDto: CreateUpdateVeiculosInputDto;
}

@Injectable()
export class UpdateVeiculoUseCase {
  constructor(private readonly veiculosRepository: VeiculosRepository) {}

  async execute({ id, updateVeiculosInputDto }: IUpdateVeiculosInputDto) {
    const updatedRecord = await this.veiculosRepository.update(
      id,
      updateVeiculosInputDto,
    );

    return updatedRecord;
  }
}
