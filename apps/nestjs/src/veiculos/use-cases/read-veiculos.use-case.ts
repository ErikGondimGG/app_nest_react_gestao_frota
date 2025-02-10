import { Injectable } from '@nestjs/common';
import { VeiculosInputDto } from '../dtos/veiculos-input.dto';
import { VeiculosRepository } from '../repositories/veiculos.repository';

interface IReadVeiculosInputDto {
  veiculosInputDto: VeiculosInputDto;
}

@Injectable()
export class ReadVeiculosUseCase {
  constructor(private readonly veiculosRepository: VeiculosRepository) {}

  async execute({ veiculosInputDto }: IReadVeiculosInputDto) {
    const veiculosOutputDto =
      await this.veiculosRepository.read(veiculosInputDto);

    return veiculosOutputDto;
  }
}
