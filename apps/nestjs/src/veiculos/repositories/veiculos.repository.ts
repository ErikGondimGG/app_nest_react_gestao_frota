import { PaginatedResult } from 'prisma-pagination';
import { VeiculosInputDto } from '../dtos/veiculos-input.dto';
import { VeiculosOutputDto } from '../types/veiculos-output.type';

export abstract class VeiculosRepository {
  abstract create(data: VeiculosInputDto): Promise<VeiculosOutputDto>;

  abstract read(
    filters: VeiculosInputDto,
  ): Promise<PaginatedResult<VeiculosOutputDto>>;

  abstract update(
    id: number,
    data: VeiculosInputDto,
  ): Promise<VeiculosOutputDto>;

  abstract delete(id: number): Promise<VeiculosOutputDto>;
}
