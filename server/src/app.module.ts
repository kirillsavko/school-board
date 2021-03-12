import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';
import { ApiModule } from './api.module';

@Module({
  imports: [ApiModule, TypeOrmModule.forRoot()],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
  ],
})
export class AppModule {}
