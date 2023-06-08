import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { Trainer } from 'src/trainer/entities/trainer.entity';
import { TrainerService } from 'src/trainer/trainer.service';
import { CapturedPokeResolver } from './captured-poke.resolver';
import { CapturedPokeService } from './captured-poke.service';
import { CapturedPoke } from './entities/captured-poke.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CapturedPoke, Pokemon, Trainer])],
  providers: [
    CapturedPokeResolver,
    CapturedPokeService,
    PokemonService,
    TrainerService,
  ],
})
export class CapturedPokeModule {}
