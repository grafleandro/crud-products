import { Module } from '@nestjs/common';
import { JokeGeneratorService } from './joke-generator.service';
import { JokeGeneratorController } from './joke-generator.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [JokeGeneratorController],
  providers: [JokeGeneratorService],
  imports: [
    HttpModule
  ]
})
export class JokeGeneratorModule {}
