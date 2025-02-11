import { Injectable } from '@nestjs/common';
import { CreateUpdateContatosWppInputDto } from '../dtos/create-update-contatos-wpp-input.dto';
import { ContatosWppRepository } from '../repositories/contatos-wpp.repository';
import { ContatosWppOutputType } from '../types/contatos-wpp-output.type';

interface IUpdateContatosWppInputDto {
  id: number;
  updateContatoWppInputDto: CreateUpdateContatosWppInputDto;
}

@Injectable()
export class UpdateContatoWppUseCase {
  constructor(private readonly contatosWppRepository: ContatosWppRepository) {}

  async execute({
    id,
    updateContatoWppInputDto,
  }: IUpdateContatosWppInputDto): Promise<ContatosWppOutputType> {
    const result = await this.contatosWppRepository.update(
      id,
      updateContatoWppInputDto,
    );

    return result;
  }
}
