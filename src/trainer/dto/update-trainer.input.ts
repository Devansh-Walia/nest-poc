import { CreateTrainerInput } from './create-trainer.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTrainerInput extends PartialType(CreateTrainerInput) {
  id: string;
  name?: string | undefined;
  hometown?: string | undefined;
}
