import { Injectable } from '@nestjs/common';
import { PaginatedResult } from 'prisma-pagination';
import { UsuariosInputDto } from '../dtos/usuarios-input.dtos';
import { UsuariosRepository } from '../repositories/usuarios.repository';
import { UsuariosOutputType } from '../types/usuarios-output.type';

interface IReadUsuariosInputDto {
  usuariosInputDto: UsuariosInputDto;
}

@Injectable()
export class ReadUsuariosUseCase {
  constructor(private readonly usuariosRepository: UsuariosRepository) {}

  async execute({
    usuariosInputDto,
  }: IReadUsuariosInputDto): Promise<PaginatedResult<UsuariosOutputType>> {
    const result = await this.usuariosRepository.read(usuariosInputDto);

    return result;
  }
}
