import { Injectable } from '@nestjs/common';
import { CreateUsuariosInputDto } from '../dtos/create-usuarios-input.dto';
import { UsuariosRepository } from '../repositories/usuarios.repository';
import { UsuariosOutputType } from '../types/usuarios-output.type';

interface IUpdateUsuariosInputDto {
  id: number;
  createUsuariosInputDto: CreateUsuariosInputDto;
}

@Injectable()
export class UpdateUsuarioUseCase {
  constructor(private readonly usuariosRepository: UsuariosRepository) {}

  async execute({
    id,
    createUsuariosInputDto,
  }: IUpdateUsuariosInputDto): Promise<UsuariosOutputType> {
    const result = await this.usuariosRepository.update(
      id,
      createUsuariosInputDto,
    );

    return result;
  }
}
