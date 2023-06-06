import { Module } from '@nestjs/common';
import { TrainerResolver } from './trainer.resolver';
import { TrainerService } from './trainer.service';
import { Trainer } from './entities/trainer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Trainer])],
  providers: [TrainerResolver, TrainerService],
})
export class TrainerModule {}
