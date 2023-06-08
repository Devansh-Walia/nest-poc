import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Trainer } from 'src/trainer/entities/trainer.entity';

export class CreateCapturedPokeInput {
  trainer: Trainer;
  poke: Pokemon;
}
