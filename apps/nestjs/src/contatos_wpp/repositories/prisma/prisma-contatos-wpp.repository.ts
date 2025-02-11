import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { createPaginator, PaginatedResult } from 'prisma-pagination';
import { ContatosWppInputDto } from 'src/contatos_wpp/dtos/contatos-wpp-input.dto';
import { CreateUpdateContatosWppInputDto } from 'src/contatos_wpp/dtos/create-update-contatos-wpp-input.dto';
import { ContatosWppOutputType } from 'src/contatos_wpp/types/contatos-wpp-output.type';
import { PrismaService } from 'src/prisma/prisma.service';
import { getNewDateTime } from 'src/shared/utils/date-utils';
import { ContatosWppRepository } from '../contatos-wpp.repository';

@Injectable()
export class PrismaContatosWppRepository implements ContatosWppRepository {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly contatosWppService = this.prismaService.contatos_wpp;

  async create(
    data: CreateUpdateContatosWppInputDto,
  ): Promise<ContatosWppOutputType> {
    const createdContato = await this.contatosWppService.create({
      data: {
        name: data.name,
        phone: data.phone,
        usuarios_id: data.usuarios_id,
        created_at: getNewDateTime(),
        updated_at: getNewDateTime(),
        deleted_at: null,
      },
    });

    return createdContato;
  }

  async read(
    filters: ContatosWppInputDto,
  ): Promise<PaginatedResult<ContatosWppOutputType>> {
    const where: Prisma.contatos_wppFindManyArgs['where'] = {};

    for (const key in filters) {
      if (key !== 'page' && key !== 'perPage') {
        where[key] = filters[key];
      }
    }

    const paginate = createPaginator({
      page: filters.page ?? 1,
      perPage: filters.perPage ?? 10,
    });

    const resultedRecords = await paginate<
      ContatosWppOutputType,
      Prisma.contatos_wppFindManyArgs
    >(this.contatosWppService, {
      where,
      orderBy: {
        id: 'desc',
      },
    });

    return resultedRecords;
  }

  async update(
    id: number,
    data: CreateUpdateContatosWppInputDto,
  ): Promise<ContatosWppOutputType> {
    const updatedContato = await this.contatosWppService.update({
      where: { id: id, deleted_at: null },
      data: {
        name: data.name,
        phone: data.phone,
        usuarios_id: data.usuarios_id,
        updated_at: getNewDateTime(),
        deleted_at: null,
      },
    });

    return updatedContato;
  }

  async delete(id: number): Promise<ContatosWppOutputType> {
    const deletedContato = await this.contatosWppService.update({
      where: { id: id },
      data: {
        deleted_at: getNewDateTime(),
      },
    });

    return deletedContato;
  }
}
