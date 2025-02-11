import { IsEmail, IsString } from 'class-validator';

export class AuthRegisterInputDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;
}
