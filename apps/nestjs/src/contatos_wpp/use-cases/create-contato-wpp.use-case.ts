import { Injectable } from '@nestjs/common';
import { CreateUpdateContatosWppInputDto } from '../dtos/create-update-contatos-wpp-input.dto';
import { ContatosWppRepository } from '../repositories/contatos-wpp.repository';
import { ContatosWppOutputType } from '../types/contatos-wpp-output.type';

interface ICreateContatoWppInputDto {
  createContatoWppInputDto: CreateUpdateContatosWppInputDto;
}

@Injectable()
export class CreateContatoWppUseCase {
  constructor(private readonly contatosWppRepository: ContatosWppRepository) {}

  async execute({
    createContatoWppInputDto,
  }: ICreateContatoWppInputDto): Promise<ContatosWppOutputType> {
    const resultedCreate = await this.contatosWppRepository.create(
      createContatoWppInputDto,
    );

    return resultedCreate;
  }
}
