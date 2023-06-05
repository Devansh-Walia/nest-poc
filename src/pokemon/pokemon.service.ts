import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePokemonInput } from './dto/create-pokemon.input';
import { UpdatePokemonInput } from './dto/update-pokemon.input';
import { Pokemon } from './entities/pokemon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}
  async create(createPokemonInput: CreatePokemonInput) {
    const name = createPokemonInput.name;

    const isPresent = await this.pokemonRepository.countBy({
      name: name,
    });

    if (!isPresent) {
      const poke = await this.pokemonRepository.save(createPokemonInput);

      return poke;
    }
    throw new HttpException(`${name} already exists`, HttpStatus.BAD_REQUEST);
  }

  async findAll() {
    const poke = await this.pokemonRepository.findAndCount();

    return poke[0];
  }

  async findOne(id: string) {
    const poke = await this.pokemonRepository.findOneBy({
      id: id,
    });

    if (!poke) {
      throw new HttpException('No poke with given id', HttpStatus.BAD_REQUEST);
    }

    return poke;
  }

  async update(updatePokemonInput: UpdatePokemonInput) {
    const id = updatePokemonInput.id;
    const poke = await this.pokemonRepository.findOneBy({
      id: id,
    });

    if (!poke) {
      throw new HttpException(
        'no poke with given id found',
        HttpStatus.NOT_FOUND,
      );
    }

    await this.pokemonRepository.update(
      {
        id: id,
      },
      updatePokemonInput,
    );

    return this.findOne(id);
  }

  async remove(id: string) {
    await this.pokemonRepository.delete({
      id: id,
    });

    return {
      message: id,
      status: 200,
    };
  }

  async removeAll() {
    await this.pokemonRepository.clear();

    return {
      message: 'update success',
      status: 200,
    };
  }
}
