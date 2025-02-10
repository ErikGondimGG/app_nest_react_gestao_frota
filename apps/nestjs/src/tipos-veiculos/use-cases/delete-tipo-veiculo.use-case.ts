import { Injectable } from '@nestjs/common';
import { TiposVeiculosRepository } from '../repositories/tipos-veiculos.repository';
import { TiposVeiculosOutputDto } from '../types/tipos-veiculos-output.dto';

interface IDeleteTiposVeiculosInputDto {
  id: number;
}

@Injectable()
export class DeleteTiposVeiculosUseCase {
  constructor(private tiposVeiculosRepository: TiposVeiculosRepository) {}

  async execute({
    id,
  }: IDeleteTiposVeiculosInputDto): Promise<TiposVeiculosOutputDto> {
    const resultedDelete = await this.tiposVeiculosRepository.delete(id);

    return resultedDelete;
  }
}
