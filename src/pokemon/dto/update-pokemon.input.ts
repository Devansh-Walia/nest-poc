import { CreatePokemonInput } from './create-pokemon.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePokemonInput extends PartialType(CreatePokemonInput) {
  id: string;
  name?: string | undefined;
  type?: string | undefined;
  description?: string | undefined;
}
