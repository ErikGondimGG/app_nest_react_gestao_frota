import { PaginatedResult } from 'prisma-pagination';
import { CreateUsuariosInputDto } from '../dtos/create-usuarios-input.dto';
import { UsuariosInputDto } from '../dtos/usuarios-input.dtos';
import { UsuariosOutputType } from '../types/usuarios-output.type';

export abstract class UsuariosRepository {
  abstract create(data: UsuariosInputDto): Promise<UsuariosOutputType>;
  abstract read(
    filters: UsuariosInputDto,
  ): Promise<PaginatedResult<UsuariosOutputType>>;

  abstract update(
    id: number,
    data: CreateUsuariosInputDto,
  ): Promise<UsuariosOutputType>;

  abstract delete(id: number): Promise<UsuariosOutputType>;
}
