import { Test, TestingModule } from '@nestjs/testing';
import { JokeGeneratorService } from './joke-generator.service';

describe('JokeGeneratorService', () => {
  let service: JokeGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JokeGeneratorService],
    }).compile();

    service = module.get<JokeGeneratorService>(JokeGeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
