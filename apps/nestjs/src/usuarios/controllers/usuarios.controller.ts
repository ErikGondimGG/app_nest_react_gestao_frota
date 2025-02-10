import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaginatedResult } from 'prisma-pagination';
import { CreateUsuariosInputDto } from '../dtos/create-usuarios-input.dto';
import { UsuariosInputDto } from '../dtos/usuarios-input.dtos';
import { UsuariosOutputType } from '../types/usuarios-output.type';
import { CreateUsuarioUseCase } from '../use-cases/create-usuario.use-case';
import { DeleteUsuariosUseCase } from '../use-cases/delete-usuarios.use-case';
import { ReadUsuariosUseCase } from '../use-cases/read-usuarios.use-case';
import { UpdateUsuarioUseCase } from '../use-cases/update-usuario.use-case';

@ApiTags('Usuários')
@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly createUsuarioUseCase: CreateUsuarioUseCase,
    private readonly readUsuariosUseCase: ReadUsuariosUseCase,
    private readonly updateUsuarioUseCase: UpdateUsuarioUseCase,
    private readonly deleteUsuarioUseCase: DeleteUsuariosUseCase,
  ) {}

  @Post('create')
  async create(
    @Body() createUsuariosInputDto: CreateUsuariosInputDto,
  ): Promise<UsuariosOutputType> {
    return await this.createUsuarioUseCase.execute({ createUsuariosInputDto });
  }

  @Get('read')
  async findAll(
    @Query() usuariosInputDto: UsuariosInputDto,
  ): Promise<PaginatedResult<UsuariosOutputType>> {
    return await this.readUsuariosUseCase.execute({ usuariosInputDto });
  }

  @Put('update/:id')
  async update(
    @Param('id') id: number,
    @Body() createUsuariosInputDto: CreateUsuariosInputDto,
  ): Promise<UsuariosOutputType> {
    return await this.updateUsuarioUseCase.execute({
      id,
      createUsuariosInputDto,
    });
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number): Promise<UsuariosOutputType> {
    return await this.deleteUsuarioUseCase.execute({ id });
  }
}
