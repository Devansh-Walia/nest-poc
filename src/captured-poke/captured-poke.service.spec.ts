import { Test, TestingModule } from '@nestjs/testing';
import { CapturedPokeService } from './captured-poke.service';

describe('CapturedPokeService', () => {
  let service: CapturedPokeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CapturedPokeService],
    }).compile();

    service = module.get<CapturedPokeService>(CapturedPokeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
