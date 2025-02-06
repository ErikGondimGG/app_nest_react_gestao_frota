import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUpdateTiposVeiculosInputDto {
  @IsString()
  @IsNotEmpty()
  descricao: string;
}
