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
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUpdateTiposVeiculosInputDto } from '../dtos/create-update-tipos-veiculos-input.dto';
import { TiposVeiculosInputDto } from '../dtos/tipos-veiculos-input.dto';
import { CreateTiposVeiculosUseCase } from '../use-cases/create-tipo-veiculo.use-case';
import { DeleteTiposVeiculosUseCase } from '../use-cases/delete-tipo-veiculo.use-case';
import { ReadTiposVeiculosUseCase } from '../use-cases/read-tipos-veiculo.use-case';
import { UpdateTiposVeiculosUseCase } from '../use-cases/update-tipo-veiculo.use-case';

@Controller('tipos-veiculos')
@ApiTags('Tipos-veiculos')
export class TiposVeiculosController {
  constructor(
    private readonly createTiposVeiculosUseCase: CreateTiposVeiculosUseCase,
    private readonly readTiposVeiculosUseCase: ReadTiposVeiculosUseCase,
    private readonly updateTiposVeiculosUseCase: UpdateTiposVeiculosUseCase,
    private readonly deleteTiposVeiculosUseCase: DeleteTiposVeiculosUseCase,
  ) {}

  @Post()
  @ApiBody({
    type: CreateUpdateTiposVeiculosInputDto,
    description: 'Create a new tipos-veiculos',
    required: true,
    examples: {
      descricao: {
        value: {
          descricao: 'Carro',
        },
      },
    },
  })
  async create(
    @Body() createTiposVeiculosInputDto: CreateUpdateTiposVeiculosInputDto,
  ) {
    const createdRecord = await this.createTiposVeiculosUseCase.execute({
      createTiposVeiculosInputDto,
    });

    return createdRecord;
  }

  @Get()
  async read(@Query() tiposVeiculosInputDto: TiposVeiculosInputDto) {
    const readedRecords = await this.readTiposVeiculosUseCase.execute({
      tiposVeiculosInputDto,
    });

    return readedRecords;
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTiposVeiculosInputDto: CreateUpdateTiposVeiculosInputDto,
  ) {
    const updatedRecord = await this.updateTiposVeiculosUseCase.execute({
      id,
      updateTiposVeiculosInputDto,
    });

    return updatedRecord;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const deletedRecord = await this.deleteTiposVeiculosUseCase.execute({ id });

    return deletedRecord;
  }
}
