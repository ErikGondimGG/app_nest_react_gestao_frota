import { PaginatedResult } from 'prisma-pagination';
import { TiposVeiculosInputDto } from '../dtos/tipos-veiculos-input.dto';
import { TiposVeiculosOutputDto } from '../types/tipos-veiculos-output.dto';

export abstract class TiposVeiculosRepository {
  abstract create(data: TiposVeiculosInputDto): Promise<TiposVeiculosOutputDto>;

  abstract read(
    filters: TiposVeiculosInputDto,
  ): Promise<PaginatedResult<TiposVeiculosOutputDto>>;

  abstract update(
    id: number,
    data: TiposVeiculosInputDto,
  ): Promise<TiposVeiculosOutputDto>;

  abstract delete(id: number): Promise<TiposVeiculosOutputDto>;
}
