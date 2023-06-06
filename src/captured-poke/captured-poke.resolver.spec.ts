import { Test, TestingModule } from '@nestjs/testing';
import { CapturedPokeResolver } from './captured-poke.resolver';
import { CapturedPokeService } from './captured-poke.service';

describe('CapturedPokeResolver', () => {
  let resolver: CapturedPokeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CapturedPokeResolver, CapturedPokeService],
    }).compile();

    resolver = module.get<CapturedPokeResolver>(CapturedPokeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
