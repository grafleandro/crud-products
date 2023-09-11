import { Module } from '@nestjs/common';
import { JokeGeneratorService } from './joke-generator.service';
import { JokeGeneratorController } from './joke-generator.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { config } from '../config';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
  ],
  controllers: [JokeGeneratorController],
  providers: [JokeGeneratorService],
  
})
export class JokeGeneratorModule {}
