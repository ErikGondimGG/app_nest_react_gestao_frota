import { PaginatedResult } from 'prisma-pagination';
import { ContatosWppInputDto } from '../dtos/contatos-wpp-input.dto';
import { CreateUpdateContatosWppInputDto } from '../dtos/create-update-contatos-wpp-input.dto';
import { ContatosWppOutputType } from '../types/contatos-wpp-output.type';

export abstract class ContatosWppRepository {
  abstract create(
    data: CreateUpdateContatosWppInputDto,
  ): Promise<ContatosWppOutputType>;
  abstract read(
    filters: ContatosWppInputDto,
  ): Promise<PaginatedResult<ContatosWppOutputType>>;
  abstract update(
    id: number,
    data: CreateUpdateContatosWppInputDto,
  ): Promise<ContatosWppOutputType>;
  abstract delete(id: number): Promise<ContatosWppOutputType>;
}
