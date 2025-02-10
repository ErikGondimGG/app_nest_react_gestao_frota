import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UsuariosInputDto {
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
  @Transform(({ value }) => {
    if (typeof value !== 'string') {
      return value.trim();
    }

    return value;
  })
  email?: string;

  @IsBoolean()
  @IsOptional()
  isAdmin?: boolean;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value !== 'string') {
      return value.trim();
    }

    return value;
  })
  password?: string;

  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value !== 'string') {
      return value.trim();
    }

    return value;
  })
  name?: string;

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

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }

    return value;
  })
  page?: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }

    return value;
  })
  perPage?: number;
}
