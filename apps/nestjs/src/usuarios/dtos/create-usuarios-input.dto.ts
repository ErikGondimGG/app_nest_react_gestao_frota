import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUsuariosInputDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsOptional()
  isAdmin?: boolean;
}
