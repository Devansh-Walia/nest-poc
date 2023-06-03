import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePokemonInput } from './dto/create-pokemon.input';
import { UpdatePokemonInput } from './dto/update-pokemon.input';
import { Pokemon } from './entities/pokemon.entity';

let pokemons: Pokemon[] = [];

@Injectable()
export class PokemonService {
  create(createPokemonInput: CreatePokemonInput) {
    const id = pokemons.length + 1;
    const name = createPokemonInput.name;

    const isPresent = pokemons.find((poke) => poke.name === name);

    if (!isPresent) {
      const poke = { id: id, ...createPokemonInput };
      pokemons.push(poke);
      return poke;
    }
    throw new HttpException(`${name} already exists`, HttpStatus.BAD_REQUEST);
  }

  findAll() {
    return pokemons;
  }

  findOne(id: number) {
    const poke = pokemons.find((poke) => poke.id === id);
    if (!poke) {
      throw new HttpException('No poke with given id', HttpStatus.BAD_REQUEST);
    }
    return poke;
  }

  update(updatePokemonInput: UpdatePokemonInput) {
    const id = updatePokemonInput.id;
    let wasFound = false;

    const pokes = pokemons.flatMap((poke) => {
      if (poke.id === id) {
        wasFound = true;
        if (updatePokemonInput.name) {
          poke.name = updatePokemonInput.name;
        }
        if (updatePokemonInput.type) {
          poke.type = updatePokemonInput.type;
        }
      }
      return poke;
    });
    if (!wasFound) {
      throw new HttpException(
        'no poke with given id found',
        HttpStatus.NOT_FOUND,
      );
    }
    pokemons = pokes;

    return { id: id, message: 'updated' };
  }

  remove(id: number) {
    let wasFound = false;
    pokemons = pokemons.filter((poke) => {
      if (poke.id === id) {
        wasFound = true;
        return false;
      }
      return true;
    });

    if (!wasFound) {
      throw new HttpException('id not found', HttpStatus.I_AM_A_TEAPOT);
    }

    return {
      message: 'update success',
      status: 200,
    };
  }
}
