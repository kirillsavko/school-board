import { Module } from '@nestjs/common';
import { ParentService } from './services/parent.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParentEntity } from './parent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParentEntity])],
  exports: [ParentService],
  providers: [ParentService],
})
export class ParentModule {}
