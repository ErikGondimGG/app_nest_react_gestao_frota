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
import { ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PaginatedResult } from 'prisma-pagination';
import { CreateUsuariosInputDto } from '../dtos/create-usuarios-input.dto';
import { UsuariosInputDto } from '../dtos/usuarios-input.dto';
import { UsuariosOutputType } from '../types/usuarios-output.type';
import { CreateUsuarioUseCase } from '../use-cases/create-usuario.use-case';
import { DeleteUsuariosUseCase } from '../use-cases/delete-usuarios.use-case';
import { ReadUsuariosUseCase } from '../use-cases/read-usuarios.use-case';
import { UpdateUsuarioUseCase } from '../use-cases/update-usuario.use-case';

@Controller('usuarios')
@ApiTags('Usuários')
export class UsuariosController {
  constructor(
    private readonly createUsuarioUseCase: CreateUsuarioUseCase,
    private readonly readUsuariosUseCase: ReadUsuariosUseCase,
    private readonly updateUsuarioUseCase: UpdateUsuarioUseCase,
    private readonly deleteUsuarioUseCase: DeleteUsuariosUseCase,
  ) {}

  @Post('create')
  @ApiBody({
    type: CreateUsuariosInputDto,
    required: true,
    description: 'Dados para criação do usuário',
  })
  async create(
    @Body() createUsuariosInputDto: CreateUsuariosInputDto,
  ): Promise<UsuariosOutputType> {
    return await this.createUsuarioUseCase.execute({ createUsuariosInputDto });
  }

  @Get('read')
  @ApiQuery({
    name: 'id',
    required: false,
    description: 'ID do usuário',
  })
  @ApiQuery({
    name: 'email',
    required: false,
    description: 'E-mail do usuário',
  })
  @ApiQuery({
    name: 'isAdmin',
    required: false,
    description: 'Usuário admin?',
    type: Boolean,
  })
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Nome do usuário',
  })
  @ApiQuery({
    name: 'created_at',
    required: false,
    description: 'Data de criação',
    type: Date,
  })
  @ApiQuery({
    name: 'updated_at',
    required: false,
    description: 'Data de atualização',
    type: Date,
  })
  @ApiQuery({
    name: 'deleted_at',
    required: false,
    description: 'Data de exclusão',
    type: Date,
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Pagina',
  })
  @ApiQuery({
    name: 'perPage',
    required: false,
    description: 'Quantidade de registros por pagina',
  })
  async findAll(
    @Query() usuariosInputDto: UsuariosInputDto,
  ): Promise<PaginatedResult<UsuariosOutputType>> {
    return await this.readUsuariosUseCase.execute({ usuariosInputDto });
  }

  @Put('update/:id')
  @ApiBody({
    type: CreateUsuariosInputDto,
    required: true,
    description: 'Dados para atualização do usuário',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID do usuário',
  })
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
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID do usuário',
  })
  async delete(@Param('id') id: number): Promise<UsuariosOutputType> {
    return await this.deleteUsuarioUseCase.execute({ id });
  }
}
