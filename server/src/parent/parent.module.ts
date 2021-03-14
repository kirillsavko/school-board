import { Module } from '@nestjs/common';
import { ParentService } from './services/parent.service';

@Module({
  providers: [ParentService],
})
export class ParentModule {}
