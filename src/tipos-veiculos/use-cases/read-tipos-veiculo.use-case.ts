import { Injectable } from '@nestjs/common';
import { TiposVeiculosInputDto } from '../dtos/tipos-veiculos-input.dto';
import { TiposVeiculosRepository } from '../repositories/tipos-veiculos.repository';

interface IReadTiposVeiculosInputDto {
  tiposVeiculosInputDto: TiposVeiculosInputDto;
}

@Injectable()
export class ReadTiposVeiculosUseCase {
  constructor(private tiposVeiculosRepository: TiposVeiculosRepository) {}

  async execute({ tiposVeiculosInputDto }: IReadTiposVeiculosInputDto) {
    const resultedRecords = await this.tiposVeiculosRepository.read(
      tiposVeiculosInputDto,
    );

    return resultedRecords;
  }
}
