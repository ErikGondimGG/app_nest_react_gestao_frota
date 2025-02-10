import { PaginatedResult } from 'prisma-pagination';
import { TiposVeiculosInputDto } from '../dtos/tipos-veiculos-input.dto';
import { TiposVeiculosOutputType } from '../types/tipos-veiculos-output.dto';

export abstract class TiposVeiculosRepository {
  abstract create(
    data: TiposVeiculosInputDto,
  ): Promise<TiposVeiculosOutputType>;

  abstract read(
    filters: TiposVeiculosInputDto,
  ): Promise<PaginatedResult<TiposVeiculosOutputType>>;

  abstract update(
    id: number,
    data: TiposVeiculosInputDto,
  ): Promise<TiposVeiculosOutputType>;

  abstract delete(id: number): Promise<TiposVeiculosOutputType>;
}
