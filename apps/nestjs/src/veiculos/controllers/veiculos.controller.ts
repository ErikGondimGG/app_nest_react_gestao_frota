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
import { CreateUpdateVeiculosInputDto } from '../dtos/create-update-veiculo-input.dto';
import { VeiculosInputDto } from '../dtos/veiculos-input.dto';
import { VeiculosOutputType } from '../types/veiculos-output.type';
import { CreateVeiculoUseCase } from '../use-cases/create-veiculo.use-case';
import { DeleteVeiculoUseCase } from '../use-cases/delete-veiculo.use-case';
import { ReadVeiculosUseCase } from '../use-cases/read-veiculos.use-case';
import { UpdateVeiculoUseCase } from '../use-cases/update-veiculo.use-case';

@Controller('veiculos')
@ApiTags('Veiculos')
export class VeiculosController {
  constructor(
    private readonly createVeiculoUseCase: CreateVeiculoUseCase,
    private readonly readVeiculosUseCase: ReadVeiculosUseCase,
    private readonly updateVeiculoUseCase: UpdateVeiculoUseCase,
    private readonly deleteVeiculoUseCase: DeleteVeiculoUseCase,
  ) {}

  @Post('create')
  create(
    @Body() createVeiculosInputDto: CreateUpdateVeiculosInputDto,
  ): Promise<VeiculosOutputType> {
    return this.createVeiculoUseCase.execute({ createVeiculosInputDto });
  }

  @Get('read')
  read(
    @Query() veiculosInputDto: VeiculosInputDto,
  ): Promise<PaginatedResult<VeiculosOutputType>> {
    return this.readVeiculosUseCase.execute({ veiculosInputDto });
  }

  @Put('update/:id')
  update(
    @Param('id') id: number,
    @Body() updateVeiculosInputDto: CreateUpdateVeiculosInputDto,
  ): Promise<VeiculosOutputType> {
    return this.updateVeiculoUseCase.execute({ id, updateVeiculosInputDto });
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number): Promise<VeiculosOutputType> {
    return this.deleteVeiculoUseCase.execute(id);
  }
}
