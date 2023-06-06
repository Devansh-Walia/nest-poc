import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTrainerInput } from './dto/create-trainer.input';
import { UpdateTrainerInput } from './dto/update-trainer.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Trainer } from './entities/trainer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TrainerService {
  constructor(
    @InjectRepository(Trainer)
    private readonly trainerRepository: Repository<Trainer>,
  ) {}
  async create(createTrainerInput: CreateTrainerInput) {
    const name = createTrainerInput.name;

    const isPresent = await this.trainerRepository.countBy({
      name: name,
    });

    if (!isPresent) {
      const trainer = await this.trainerRepository.save(createTrainerInput);

      return trainer;
    }
    throw new HttpException(`${name} already exists`, HttpStatus.BAD_REQUEST);
  }

  async findAll() {
    const trainer = await this.trainerRepository.findAndCount();

    return trainer[0];
  }

  async findOne(id: string) {
    const trainer = await this.trainerRepository.findOneBy({
      id: id,
    });

    if (!trainer) {
      throw new HttpException(
        'No trainer with given id',
        HttpStatus.BAD_REQUEST,
      );
    }

    return trainer;
  }

  async update(id: string, updateTrainerInput: UpdateTrainerInput) {
    const trainer = await this.trainerRepository.findOneBy({
      id: id,
    });

    if (!trainer) {
      throw new HttpException(
        'no trainer with given id found',
        HttpStatus.NOT_FOUND,
      );
    }

    await this.trainerRepository.update(
      {
        id: id,
      },
      updateTrainerInput,
    );

    return this.findOne(id);
  }

  async remove(id: string) {
    await this.trainerRepository.delete({
      id: id,
    });

    return {
      message: id,
      status: 200,
    };
  }

  async removeAll() {
    await this.trainerRepository.clear();

    return {
      message: 'update success',
      status: 200,
    };
  }
}
