import { Injectable } from '@nestjs/common';
import { CreateUsuariosInputDto } from '../dtos/create-usuarios-input.dto';
import { UsuariosRepository } from '../repositories/usuarios.repository';
import { UsuariosOutputType } from '../types/usuarios-output.type';

interface ICreateUsuariosInputDto {
  createUsuariosInputDto: CreateUsuariosInputDto;
}

@Injectable()
export class CreateUsuarioUseCase {
  constructor(private readonly usuariosRepository: UsuariosRepository) {}

  async execute({
    createUsuariosInputDto,
  }: ICreateUsuariosInputDto): Promise<UsuariosOutputType> {
    const resultedCreate = await this.usuariosRepository.create(
      createUsuariosInputDto,
    );

    return resultedCreate;
  }
}
