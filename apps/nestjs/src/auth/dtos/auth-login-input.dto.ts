import { IsEmail, IsString } from 'class-validator';

export class AuthLoginInputDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
