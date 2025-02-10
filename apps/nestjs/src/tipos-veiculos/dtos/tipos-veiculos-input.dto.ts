import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class TiposVeiculosInputDto {
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }

    return value;
  })
  id?: number;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value !== 'string') {
      return value.trim();
    }

    return value;
  })
  descricao?: string;

  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  created_at?: Date;

  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  updated_at?: Date;

  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  deleted_at?: Date;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }

    return value;
  })
  page?: number;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }

    return value;
  })
  perPage?: number;
}
