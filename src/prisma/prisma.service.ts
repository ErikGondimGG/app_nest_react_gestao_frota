import { Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { getNewDateTime } from 'src/shared/utils/date-utils';

@Injectable()
export class PrismaService
  extends PrismaClient<
    Prisma.PrismaClientOptions,
    'query' | 'info' | 'warn' | 'error'
  >
  implements OnModuleInit
{
  constructor() {
    super({
      log: [
        // {
        //   emit: 'event',
        //   level: 'query',
        // },
        // {
        //   emit: 'event',
        //   level: 'error',
        // },
        // {
        //   emit: 'event',
        //   level: 'info',
        // },
        // {
        //   emit: 'event',
        //   level: 'warn',
        // },
      ],
    });
  }

  async onModuleInit() {
    this.$on('query', (event: Prisma.QueryEvent) => {
      console.log('Query: ' + event.query);
      console.log('Duration: ' + event.duration + 'ms');
    });

    await this.$connect();
  }

  async onModuleDestroy() {
    console.log('Disconnecting from database...', getNewDateTime());

    await this.$disconnect();
  }
}
