import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TrainerService } from './trainer.service';
import { CreateTrainerInput } from './dto/create-trainer.input';
import { UpdateTrainerInput } from './dto/update-trainer.input';

@Resolver('Trainer')
export class TrainerResolver {
  constructor(private readonly trainerService: TrainerService) {}

  @Mutation('createTrainer')
  create(@Args('createTrainerInput') createTrainerInput: CreateTrainerInput) {
    return this.trainerService.create(createTrainerInput);
  }

  @Query('trainerAll')
  findAll() {
    return this.trainerService.findAll();
  }

  @Query('trainer')
  findOne(@Args('id') id: string) {
    return this.trainerService.findOne(id);
  }

  @Mutation('updateTrainer')
  update(@Args('updateTrainerInput') updateTrainerInput: UpdateTrainerInput) {
    return this.trainerService.update(
      updateTrainerInput.id,
      updateTrainerInput,
    );
  }

  @Mutation('removeTrainer')
  remove(@Args('id') id: string) {
    return this.trainerService.remove(id);
  }
  @Mutation('removeTrainerAll')
  removeAll() {
    return this.trainerService.removeAll();
  }
}
