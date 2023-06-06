import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCapturedPokeInput } from './dto/create-captured-poke.input';
import { UpdateCapturedPokeInput } from './dto/update-captured-poke.input';
import { CapturedPoke } from './entities/captured-poke.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CapturedPokeService {
  constructor(
    @InjectRepository(CapturedPoke)
    private readonly capPokeRepository: Repository<CapturedPoke>,
  ) {}
  async create(createCapturedPokeInput: CreateCapturedPokeInput) {
    const trainer_id = createCapturedPokeInput.trainer_id;
    const poke_id = createCapturedPokeInput.poke_id;

    const isPresent = await this.capPokeRepository.findOneBy({
      poke_id: poke_id,
      trainer_id: trainer_id,
    });

    if (isPresent) {
      return this.update(isPresent.id, {
        ...isPresent,
        count: isPresent.count + 1,
      });
    } else {
      const poke = await this.capPokeRepository.save(createCapturedPokeInput);
      return poke;
    }
  }

  async findOne(id: string) {
    const capturedPoke = await this.capPokeRepository.findOneBy({
      id: id,
    });

    if (!capturedPoke) {
      throw new HttpException(
        'No captured Poke with given id',
        HttpStatus.BAD_REQUEST,
      );
    }

    return capturedPoke;
  }

  async findPoke(id: string) {
    const capturedPoke = await this.capPokeRepository.findBy({
      trainer_id: id,
    });

    if (!capturedPoke) {
      throw new HttpException(
        'No captured Poke with given capturedPoke',
        HttpStatus.BAD_REQUEST,
      );
    }

    return capturedPoke;
  }

  async findTrainer(id: string) {
    const pokeTrainers = await this.capPokeRepository.findBy({
      trainer_id: id,
    });

    if (!pokeTrainers) {
      throw new HttpException(
        'No trainers have captured this poke yet',
        HttpStatus.BAD_REQUEST,
      );
    }

    return pokeTrainers;
  }

  async update(id: string, updateCapturedPokeInput: UpdateCapturedPokeInput) {
    await this.capPokeRepository.update(
      {
        id: id,
      },
      updateCapturedPokeInput,
    );

    return this.findOne(id);
  }

  async remove(id: string) {
    await this.capPokeRepository.delete({
      id: id,
    });

    return {
      message: id,
      status: 200,
    };
  }
}
