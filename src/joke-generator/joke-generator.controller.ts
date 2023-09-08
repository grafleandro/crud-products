import { Controller, Get } from '@nestjs/common';
import { JokeGeneratorService } from './joke-generator.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Joke generator")
@Controller('joke-generator')
export class JokeGeneratorController {
  constructor(private readonly jokeGeneratorService: JokeGeneratorService) {}

  @Get()
  async Generator() {
    return await this.jokeGeneratorService.Generator();
  }
}
