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
    const trainer = createCapturedPokeInput.trainer;
    const poke = createCapturedPokeInput.poke;

    const isPresent = await this.findOneByPokeAndTrainer(trainer.id, poke.id);

    if (isPresent) {
      return this.update(isPresent.id, {
        ...isPresent,
        poke: poke,
        trainer: trainer,
        count: isPresent.count + 1,
      });
    } else {
      const pokeNew = await this.capPokeRepository.save(
        createCapturedPokeInput,
      );
      return pokeNew;
    }
  }

  async findOne(id: string) {
    const capturedPoke = await this.capPokeRepository.findOne({
      where: {
        id: id,
      },
      relations: ['poke', 'trainer'],
    });

    if (!capturedPoke) {
      throw new HttpException(
        'No captured Poke with given id',
        HttpStatus.BAD_REQUEST,
      );
    }

    return capturedPoke;
  }

  async findCapturedPokeByTrainer(id: string) {
    console.log(id);

    const x = await this.capPokeRepository
      .createQueryBuilder('capturedpoke')
      .loadAllRelationIds()
      .where('capturedpoke.trainer_id = :trainerId', { trainerId: id })
      .getOne();

    console.log(x);

    return x;
  }

  async findTrainer(id: string) {
    console.log(id);

    const x = await this.capPokeRepository
      .createQueryBuilder('capturedpoke')
      .loadAllRelationIds()
      .where('capturedpoke.poke_id = :pokeId', {
        pokeId: id,
      })
      .getMany();

    console.log(x);

    return x;
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

  async findOneByPokeAndTrainer(
    trainer_id: string,
    poke_id: string,
  ): Promise<CapturedPoke | null> {
    return await this.capPokeRepository
      .createQueryBuilder('capturedpoke')
      .loadAllRelationIds()
      .where('capturedpoke.trainer_id = :trainerId', {
        trainerId: trainer_id,
      })
      .andWhere('capturedpoke.poke_id = :pokeId', { pokeId: poke_id })
      .getOne();
  }
}
