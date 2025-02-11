import { Module } from '@nestjs/common';
import { ContatosWppController } from './controllers/contatos-wpp.controller';
import { ContatosWppRepository } from './repositories/contatos-wpp.repository';
import { PrismaContatosWppRepository } from './repositories/prisma/prisma-contatos-wpp.repository';
import { CreateContatoWppUseCase } from './use-cases/create-contato-wpp.use-case';
import { DeleteContatosWppUseCase } from './use-cases/delete-contato-wpp.use-case';
import { ReadContatosWppUseCase } from './use-cases/read-contatos-wpp.use-case';
import { UpdateContatoWppUseCase } from './use-cases/update-contato-wpp.use-case';

@Module({
  providers: [
    {
      provide: ContatosWppRepository,
      useClass: PrismaContatosWppRepository,
    },
    CreateContatoWppUseCase,
    ReadContatosWppUseCase,
    UpdateContatoWppUseCase,
    DeleteContatosWppUseCase,
  ],
  controllers: [ContatosWppController],
  exports: [
    CreateContatoWppUseCase,
    ReadContatosWppUseCase,
    UpdateContatoWppUseCase,
    DeleteContatosWppUseCase,
  ],
})
export class ContatosWppModule {}
