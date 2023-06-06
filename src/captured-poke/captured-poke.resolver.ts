import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CapturedPokeService } from './captured-poke.service';
import { CreateCapturedPokeInput } from './dto/create-captured-poke.input';
import { UpdateCapturedPokeInput } from './dto/update-captured-poke.input';

@Resolver('CapturedPoke')
export class CapturedPokeResolver {
  constructor(private readonly capturedPokeService: CapturedPokeService) {}

  @Mutation('createCapturedPoke')
  create(
    @Args('createCapturedPokeInput')
    createCapturedPokeInput: CreateCapturedPokeInput,
  ) {
    return this.capturedPokeService.create(createCapturedPokeInput);
  }

  @Query('capturedPokeByTrainer')
  findPoke(@Args('t_id') id: string) {
    return this.capturedPokeService.findPoke(id);
  }

  @Query('capturedTrainer')
  findOne(@Args('p_id') id: string) {
    return this.capturedPokeService.findTrainer(id);
  }

  @Mutation('updateCapturedPoke')
  update(
    @Args('updateCapturedPokeInput')
    updateCapturedPokeInput: UpdateCapturedPokeInput,
  ) {
    return this.capturedPokeService.update(
      updateCapturedPokeInput.id,
      updateCapturedPokeInput,
    );
  }

  @Mutation('removeCapturedPoke')
  remove(@Args('id') id: string) {
    return this.capturedPokeService.remove(id);
  }
}
