import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PokemonService } from './pokemon.service';
import { CreatePokemonInput } from './dto/create-pokemon.input';
import { UpdatePokemonInput } from './dto/update-pokemon.input';

@Resolver('pokemon')
export class PokemonResolver {
  constructor(private readonly pokemonService: PokemonService) {}

  @Mutation('createPokemon')
  create(@Args('createPokemonInput') createPokemonInput: CreatePokemonInput) {
    return this.pokemonService.create(createPokemonInput);
  }

  @Query('pokemonAll')
  findAll() {
    return this.pokemonService.findAll();
  }

  @Query('pokemon')
  findOne(@Args('id') id: string) {
    return this.pokemonService.findOne(id);
  }

  @Mutation('updatePokemon')
  update(@Args('updatePokemonInput') updatePokemonInput: UpdatePokemonInput) {
    return this.pokemonService.update(updatePokemonInput);
  }

  @Mutation('removePokemon')
  remove(@Args('id') id: string) {
    return this.pokemonService.remove(id);
  }
  @Mutation('removeAllPokemon')
  removeAll() {
    return this.pokemonService.removeAll();
  }
}
