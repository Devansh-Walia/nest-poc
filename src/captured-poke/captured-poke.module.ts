import { Module } from '@nestjs/common';
import { CapturedPokeService } from './captured-poke.service';
import { CapturedPokeResolver } from './captured-poke.resolver';
import { CapturedPoke } from './entities/captured-poke.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CapturedPoke])],
  providers: [CapturedPokeResolver, CapturedPokeService],
})
export class CapturedPokeModule {}
