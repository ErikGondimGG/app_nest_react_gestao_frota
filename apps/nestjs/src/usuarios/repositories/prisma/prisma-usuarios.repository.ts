import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { createPaginator, PaginatedResult } from 'prisma-pagination';
import { PrismaService } from 'src/prisma/prisma.service';
import { getNewDateTime } from 'src/shared/utils/date-utils';
import { CreateUsuariosInputDto } from 'src/usuarios/dtos/create-usuarios-input.dto';
import { UsuariosInputDto } from 'src/usuarios/dtos/usuarios-input.dtos';
import { UsuariosOutputType } from 'src/usuarios/types/usuarios-output.type';
import { UsuariosRepository } from '../usuarios.repository';

@Injectable()
export class PrismaUsuariosRepository implements UsuariosRepository {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly usuariosService = this.prismaService.usuarios;

  async create(data: CreateUsuariosInputDto): Promise<UsuariosOutputType> {
    const createdUsuario = await this.usuariosService.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
        isAdmin: data.isAdmin,
        created_at: getNewDateTime(),
        updated_at: getNewDateTime(),
        deleted_at: null,
      },
    });

    return createdUsuario;
  }

  async read(
    filters: UsuariosInputDto,
  ): Promise<PaginatedResult<UsuariosOutputType>> {
    const where: Prisma.usuariosFindManyArgs['where'] = {};

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
      UsuariosOutputType,
      Prisma.usuariosFindManyArgs
    >(this.usuariosService, {
      where,
      orderBy: {
        id: 'desc',
      },
    });

    return resultedRecords;
  }

  async update(
    id: number,
    data: UsuariosInputDto,
  ): Promise<UsuariosOutputType> {
    const resultedUpdate = await this.usuariosService.update({
      where: { id: id, deleted_at: null },
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
        isAdmin: data.isAdmin,
        updated_at: getNewDateTime(),
      },
    });

    return resultedUpdate;
  }

  async delete(id: number): Promise<UsuariosOutputType> {
    const resultedDelete = await this.usuariosService.update({
      where: { id: id },
      data: {
        deleted_at: getNewDateTime(),
      },
    });

    return resultedDelete;
  }
}
