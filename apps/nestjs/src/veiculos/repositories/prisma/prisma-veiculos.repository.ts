import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { createPaginator, PaginatedResult } from 'prisma-pagination';
import { PrismaService } from 'src/prisma/prisma.service';
import { getNewDateTime } from 'src/shared/utils/date-utils';
import { CreateUpdateVeiculosInputDto } from 'src/veiculos/dtos/create-update-veiculo-input.dto';
import { VeiculosInputDto } from 'src/veiculos/dtos/veiculos-input.dto';
import { VeiculosOutputType } from 'src/veiculos/types/veiculos-output.type';
import { VeiculosRepository } from '../veiculos.repository';

@Injectable()
export class PrismaVeiculosRepository implements VeiculosRepository {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly prismaVeiculos = this.prismaService.veiculos;

  async create(
    data: CreateUpdateVeiculosInputDto,
  ): Promise<VeiculosOutputType> {
    const resultedCreate = await this.prismaVeiculos.create({
      data: {
        placa: data.placa,
        marca: data.marca,
        modelo: data.modelo,
        ano_fabricacao: data.ano_fabricacao,
        ano_modelo: data.ano_modelo,
        cor: data.cor,
        tag: data.tag,
        km: data.km,
        hr: data.hr,
        capacidade_carga: data.capacidade_carga,
        tipo_veiculo_id: data.tipo_veiculo_id,
        created_at: getNewDateTime(),
        updated_at: getNewDateTime(),
        deleted_at: null,
      },
    });

    return resultedCreate;
  }

  async read(
    filters: VeiculosInputDto,
  ): Promise<PaginatedResult<VeiculosOutputType>> {
    const where: Prisma.veiculosFindManyArgs['where'] = {};

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
      VeiculosOutputType,
      Prisma.veiculosFindManyArgs
    >(this.prismaVeiculos, {
      where,
      include: {
        tipos_veiculos: true,
      },
      orderBy: {
        id: 'desc',
      },
    });

    return resultedRecords;
  }

  async update(
    id: number,
    data: VeiculosInputDto,
  ): Promise<VeiculosOutputType> {
    const resultedUpdate = await this.prismaVeiculos.update({
      where: { id: id, deleted_at: null },
      data: {
        placa: data.placa,
        marca: data.marca,
        modelo: data.modelo,
        ano_fabricacao: data.ano_fabricacao,
        ano_modelo: data.ano_modelo,
        cor: data.cor,
        tag: data.tag,
        km: data.km,
        hr: data.hr,
        capacidade_carga: data.capacidade_carga,
        tipo_veiculo_id: data.tipo_veiculo_id,
        updated_at: getNewDateTime(),
        deleted_at: data.deleted_at,
      },
    });

    return resultedUpdate;
  }

  async delete(id: number): Promise<VeiculosOutputType> {
    const resultedDelete = await this.prismaVeiculos.update({
      where: { id: id },
      data: {
        deleted_at: getNewDateTime(),
      },
    });

    return resultedDelete;
  }
}
