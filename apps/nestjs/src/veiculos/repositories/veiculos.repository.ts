import { PaginatedResult } from 'prisma-pagination';
import { VeiculosInputDto } from '../dtos/veiculos-input.dto';
import { VeiculosOutputType } from '../types/veiculos-output.type';

export abstract class VeiculosRepository {
  abstract create(data: VeiculosInputDto): Promise<VeiculosOutputType>;

  abstract read(
    filters: VeiculosInputDto,
  ): Promise<PaginatedResult<VeiculosOutputType>>;

  abstract update(
    id: number,
    data: VeiculosInputDto,
  ): Promise<VeiculosOutputType>;

  abstract delete(id: number): Promise<VeiculosOutputType>;
}
