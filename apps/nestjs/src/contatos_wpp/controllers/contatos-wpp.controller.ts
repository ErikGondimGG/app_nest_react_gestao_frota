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
import { ContatosWppInputDto } from '../dtos/contatos-wpp-input.dto';
import { CreateUpdateContatosWppInputDto } from '../dtos/create-update-contatos-wpp-input.dto';
import { ContatosWppOutputType } from '../types/contatos-wpp-output.type';
import { CreateContatoWppUseCase } from '../use-cases/create-contato-wpp.use-case';
import { DeleteContatosWppUseCase } from '../use-cases/delete-contato-wpp.use-case';
import { ReadContatosWppUseCase } from '../use-cases/read-contatos-wpp.use-case';
import { UpdateContatoWppUseCase } from '../use-cases/update-contato-wpp.use-case';

@Controller('contatos-wpp')
@ApiTags('Contatos WPP')
export class ContatosWppController {
  constructor(
    private readonly createContatosWppUseCase: CreateContatoWppUseCase,
    private readonly readContatosWppUseCase: ReadContatosWppUseCase,
    private readonly updateContatosWppUseCase: UpdateContatoWppUseCase,
    private readonly deleteContatosWppUseCase: DeleteContatosWppUseCase,
  ) {}

  @Post('create')
  async create(
    @Body() createContatoWppInputDto: CreateUpdateContatosWppInputDto,
  ): Promise<ContatosWppOutputType> {
    return await this.createContatosWppUseCase.execute({
      createContatoWppInputDto,
    });
  }

  @Get('read')
  async findAll(
    @Query() contatosWppInputDto: ContatosWppInputDto,
  ): Promise<PaginatedResult<ContatosWppOutputType>> {
    return await this.readContatosWppUseCase.execute({ contatosWppInputDto });
  }

  @Put('update/:id')
  async update(
    @Param('id') id: number,
    @Body() updateContatoWppInputDto: CreateUpdateContatosWppInputDto,
  ): Promise<ContatosWppOutputType> {
    return await this.updateContatosWppUseCase.execute({
      id,
      updateContatoWppInputDto,
    });
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number): Promise<ContatosWppOutputType> {
    return await this.deleteContatosWppUseCase.execute({ id });
  }
}
