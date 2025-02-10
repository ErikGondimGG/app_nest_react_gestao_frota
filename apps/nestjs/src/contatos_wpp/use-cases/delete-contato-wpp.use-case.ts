import { Injectable } from '@nestjs/common';
import { ContatosWppRepository } from '../repositories/contatos-wpp.repository';
import { ContatosWppOutputType } from '../types/contatos-wpp-output.type';

interface IDeleteContatosWppInputDto {
  id: number;
}

@Injectable()
export class DeleteContatosWppUseCase {
  constructor(private readonly contatosWppRepository: ContatosWppRepository) {}

  async execute({
    id,
  }: IDeleteContatosWppInputDto): Promise<ContatosWppOutputType> {
    const result = await this.contatosWppRepository.delete(id);

    return result;
  }
}
