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
import { CreateVeiculosInputDto } from '../dtos/create-veiculo-input.dto';
import { VeiculosInputDto } from '../dtos/veiculos-input.dto';
import { VeiculosOutputDto } from '../types/veiculos-output.type';
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

  @Post()
  create(
    @Body() createVeiculosInputDto: CreateVeiculosInputDto,
  ): Promise<VeiculosOutputDto> {
    return this.createVeiculoUseCase.execute({ createVeiculosInputDto });
  }

  @Get()
  read(
    @Query() veiculosInputDto: VeiculosInputDto,
  ): Promise<PaginatedResult<VeiculosOutputDto>> {
    return this.readVeiculosUseCase.execute({ veiculosInputDto });
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() veiculosInputDto: VeiculosInputDto,
  ): Promise<VeiculosOutputDto> {
    return this.updateVeiculoUseCase.execute({ id, veiculosInputDto });
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<VeiculosOutputDto> {
    return this.deleteVeiculoUseCase.execute(id);
  }
}
