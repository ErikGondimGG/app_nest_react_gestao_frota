import { Injectable } from '@nestjs/common';
import { CreateVeiculosInputDto } from '../dtos/create-veiculo-input.dto';
import { VeiculosRepository } from '../repositories/veiculos.repository';

interface ICreateVeiculosInputDto {
  createVeiculosInputDto: CreateVeiculosInputDto;
}

@Injectable()
export class CreateVeiculoUseCase {
  constructor(private readonly veiculosRepository: VeiculosRepository) {}

  async execute({ createVeiculosInputDto }: ICreateVeiculosInputDto) {
    const createdRecord = await this.veiculosRepository.create(
      createVeiculosInputDto,
    );

    return createdRecord;
  }
}
