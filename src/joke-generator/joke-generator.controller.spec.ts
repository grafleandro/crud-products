import { Test, TestingModule } from '@nestjs/testing';
import { JokeGeneratorController } from './joke-generator.controller';
import { JokeGeneratorService } from './joke-generator.service';

describe('JokeGeneratorController', () => {
  let controller: JokeGeneratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JokeGeneratorController],
      providers: [JokeGeneratorService],
    }).compile();

    controller = module.get<JokeGeneratorController>(JokeGeneratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
