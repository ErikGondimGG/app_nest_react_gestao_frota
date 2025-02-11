import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioUseCase } from 'src/usuarios/use-cases/create-usuario.use-case';
import { ReadUsuariosUseCase } from 'src/usuarios/use-cases/read-usuarios.use-case';
import { AuthLoginInputDto } from '../dtos/auth-login-input.dto';
import { AuthRegisterInputDto } from '../dtos/auth-register-input.dto';
import {
  AuthLoginOutpuTypes,
  AuthRegisterOutputTypes,
} from '../types/auth-output.types';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly readUsuariosUseCase: ReadUsuariosUseCase,
    private readonly createUsuarioUseCase: CreateUsuarioUseCase,
  ) {}

  async login(loginDto: AuthLoginInputDto): Promise<AuthLoginOutpuTypes> {
    const user = await this.readUsuariosUseCase.execute({
      usuariosInputDto: {
        perPage: 1,
        page: 1,
        email: loginDto.email,
      },
    });

    if (user?.meta?.total === 0 || !user?.data || user?.data?.length === 0) {
      return { message: 'Email ou senha inválidos.' };
    }

    // Criar string no formato "email + senha"
    const rawPassword = `${loginDto.email}${loginDto.password}`;

    // Comparar senha informada com a armazenada no banco usando compareSync
    const isPasswordValid = bcrypt.compareSync(
      rawPassword,
      user.data[0].password,
    );

    if (!isPasswordValid) {
      return { message: 'Email ou senha inválidos.' };
    }

    // Gerar token JWT
    const token = this.jwtService.sign({ email: user.data[0].email });

    // The returned object contains a message and a token field.
    // The token field is a JWT token generated based on the user's email.
    return { message: 'Bem Vindo!', token };
  }

  async register(
    registerDto: AuthRegisterInputDto,
  ): Promise<AuthRegisterOutputTypes> {
    const user = await this.readUsuariosUseCase.execute({
      usuariosInputDto: {
        perPage: 1,
        page: 1,
        email: registerDto.email,
      },
    });

    if (user.meta.total > 0) {
      return { message: 'Email ja cadastrado.' };
    }

    const hashPassword = bcrypt.hashSync(
      `${registerDto.email}${registerDto.password}`,
      10,
    );

    await this.createUsuarioUseCase.execute({
      createUsuariosInputDto: {
        email: registerDto.email,
        password: hashPassword,
        name: registerDto.name,
      },
    });

    // The returned object contains a message indicating the registration status
    return { message: 'Registrado com sucesso!' };
  }
}
