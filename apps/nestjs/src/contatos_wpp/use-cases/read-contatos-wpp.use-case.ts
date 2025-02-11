import { Injectable } from '@nestjs/common';
import { PaginatedResult } from 'prisma-pagination';
import { ContatosWppInputDto } from '../dtos/contatos-wpp-input.dto';
import { ContatosWppRepository } from '../repositories/contatos-wpp.repository';
import { ContatosWppOutputType } from '../types/contatos-wpp-output.type';

interface IReadContatosWppInputDto {
  contatosWppInputDto: ContatosWppInputDto;
}

@Injectable()
export class ReadContatosWppUseCase {
  constructor(private readonly contatosWppRepository: ContatosWppRepository) {}

  async execute({
    contatosWppInputDto,
  }: IReadContatosWppInputDto): Promise<
    PaginatedResult<ContatosWppOutputType>
  > {
    const result = await this.contatosWppRepository.read(contatosWppInputDto);

    return result;
  }
}
