import { Module } from '@nestjs/common';
import { UsuariosController } from './controllers/usuarios.controller';
import { PrismaUsuariosRepository } from './repositories/prisma/prisma-usuarios.repository';
import { UsuariosRepository } from './repositories/usuarios.repository';
import { CreateUsuarioUseCase } from './use-cases/create-usuario.use-case';
import { DeleteUsuariosUseCase } from './use-cases/delete-usuarios.use-case';
import { ReadUsuariosUseCase } from './use-cases/read-usuarios.use-case';
import { UpdateUsuarioUseCase } from './use-cases/update-usuario.use-case';

@Module({
  providers: [
    {
      provide: UsuariosRepository,
      useClass: PrismaUsuariosRepository,
    },
    CreateUsuarioUseCase,
    ReadUsuariosUseCase,
    UpdateUsuarioUseCase,
    DeleteUsuariosUseCase,
  ],
  controllers: [UsuariosController],
  exports: [
    CreateUsuarioUseCase,
    ReadUsuariosUseCase,
    UpdateUsuarioUseCase,
    DeleteUsuariosUseCase,
  ],
})
export class UsuariosModule {}
