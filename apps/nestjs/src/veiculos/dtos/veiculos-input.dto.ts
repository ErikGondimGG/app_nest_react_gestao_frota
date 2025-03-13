import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class VeiculosInputDto {
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }

    return value;
  })
  id?: number;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => {
    if (typeof value !== 'string') {
      return value.trim();
    }

    return value;
  })
  placa?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => {
    if (typeof value !== 'string') {
      return value.trim();
    }

    return value;
  })
  marca?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => {
    if (typeof value !== 'string') {
      return value.trim();
    }

    return value;
  })
  modelo?: string;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }

    return value;
  })
  ano_fabricacao?: number;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }

    return value;
  })
  ano_modelo?: number;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => {
    if (typeof value !== 'string') {
      return value.trim();
    }

    return value;
  })
  cor?: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value !== 'string') {
      return value.trim();
    }

    return value;
  })
  tag?: string;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }

    return value;
  })
  km?: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }

    return value;
  })
  hr?: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }

    return value;
  })
  capacidade_carga?: number;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value !== 'string') {
      return value.trim();
    }

    return value;
  })
  tipo?: string;

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
