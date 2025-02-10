import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class ContatosWppInputDto {
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
  name?: number;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value !== 'string') {
      return value.trim();
    }

    return value;
  })
  phone?: string;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }

    return value;
  })
  usuarios_id?: number;

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
