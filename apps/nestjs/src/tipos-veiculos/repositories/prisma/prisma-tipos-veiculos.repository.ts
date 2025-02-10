import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { createPaginator, PaginatedResult } from 'prisma-pagination';
import { PrismaService } from 'src/prisma/prisma.service';
import { getNewDateTime } from 'src/shared/utils/date-utils';
import { TiposVeiculosInputDto } from 'src/tipos-veiculos/dtos/tipos-veiculos-input.dto';
import { TiposVeiculosOutputDto } from 'src/tipos-veiculos/types/tipos-veiculos-output.dto';
import { TiposVeiculosRepository } from '../tipos-veiculos.repository';

@Injectable()
export class PrismaTiposVeiculosRepository implements TiposVeiculosRepository {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly prismaTiposVeiculos = this.prismaService.tipos_veiculos;

  async create(data: TiposVeiculosInputDto): Promise<TiposVeiculosOutputDto> {
    const resultedCreate = await this.prismaTiposVeiculos.create({
      data: {
        descricao: data.descricao,
        created_at: getNewDateTime(),
        updated_at: getNewDateTime(),
        deleted_at: data.deleted_at,
      },
    });

    return resultedCreate;
  }

  async read(
    filters: TiposVeiculosInputDto,
  ): Promise<PaginatedResult<TiposVeiculosOutputDto>> {
    const where: Prisma.tipos_veiculosFindManyArgs['where'] = {};

    for (const key in filters) {
      if (filters[key] !== 'page' && filters[key] !== 'perPage') {
        where[key] = filters[key];
      }
    }

    const paginate = createPaginator({
      page: filters.page ?? 1,
      perPage: filters.perPage ?? 10,
    });

    const resultedRecords = await paginate<
      TiposVeiculosOutputDto,
      Prisma.tipos_veiculosFindManyArgs
    >(this.prismaTiposVeiculos, {
      where,
      orderBy: {
        id: 'desc',
      },
    });

    return resultedRecords;
  }

  async update(
    id: number,
    data: TiposVeiculosInputDto,
  ): Promise<TiposVeiculosOutputDto> {
    const resultedUpdate = await this.prismaTiposVeiculos.update({
      where: { id: id, deleted_at: null },
      data: {
        descricao: data.descricao,
        updated_at: getNewDateTime(),
        deleted_at: data.deleted_at,
      },
    });

    return resultedUpdate;
  }

  async delete(id: number): Promise<TiposVeiculosOutputDto> {
    const resultedDelete = await this.prismaTiposVeiculos.update({
      where: { id: id },
      data: {
        deleted_at: getNewDateTime(),
      },
    });

    return resultedDelete;
  }
}
