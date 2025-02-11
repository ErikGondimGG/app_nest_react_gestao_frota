import { Injectable } from '@nestjs/common';
import { UsuariosRepository } from '../repositories/usuarios.repository';
import { UsuariosOutputType } from '../types/usuarios-output.type';

interface IDeleteUsuariosInputDto {
  id: number;
}

@Injectable()
export class DeleteUsuariosUseCase {
  constructor(private readonly usuariosRepository: UsuariosRepository) {}

  async execute({ id }: IDeleteUsuariosInputDto): Promise<UsuariosOutputType> {
    const result = await this.usuariosRepository.delete(id);

    return result;
  }
}
