import { HttpException, HttpStatus } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { TrainerService } from 'src/trainer/trainer.service';
import { CapturedPokeService } from './captured-poke.service';
import { UpdateCapturedPokeInput } from './dto/update-captured-poke.input';

@Resolver('CapturedPoke')
export class CapturedPokeResolver {
  constructor(
    private readonly capturedPokeService: CapturedPokeService,
    private readonly pokemonService: PokemonService,
    private readonly trainerService: TrainerService,
  ) {}

  @Mutation('createCapturedPoke')
  async create(
    @Args('trainer_id')
    trainer_id: string,
    @Args('poke_id')
    poke_id: string,
  ) {
    const pokemon = await this.pokemonService.findOne(poke_id);

    if (!pokemon) {
      throw new HttpException(
        'No Pokemon with given id',
        HttpStatus.BAD_REQUEST,
      );
    }

    const trainer = await this.trainerService.findOne(trainer_id);
    if (!trainer) {
      throw new HttpException(
        'No trainer with given id',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.capturedPokeService.create({
      poke: pokemon,
      trainer,
    });
  }

  @Query('capturedPokeByTrainer')
  findPoke(@Args('t_id') id: string) {
    return this.capturedPokeService.findCapturedPokeByTrainer(id);
  }

  @Query('capturedTrainer')
  findOne(@Args('p_id') id: string) {
    return this.capturedPokeService.findTrainer(id);
  }

  @Mutation('updateCapturedPoke')
  update(
    @Args('updateCapturedPokeInput')
    updateCapturedPokeInput: UpdateCapturedPokeInput,
  ) {
    return this.capturedPokeService.update(
      updateCapturedPokeInput.id,
      updateCapturedPokeInput,
    );
  }

  @Mutation('removeCapturedPoke')
  remove(@Args('id') id: string) {
    return this.capturedPokeService.remove(id);
  }
}
