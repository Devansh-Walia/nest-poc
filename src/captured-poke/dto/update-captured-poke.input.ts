import { CreateCapturedPokeInput } from './create-captured-poke.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCapturedPokeInput extends PartialType(
  CreateCapturedPokeInput,
) {
  id: string;
  poke_id?: string | undefined;
  trainer_id?: string | undefined;
  count?: number | undefined;
}
