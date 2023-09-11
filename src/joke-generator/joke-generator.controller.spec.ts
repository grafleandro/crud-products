import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { JokeGeneratorModule } from './joke-generator.module';
import { INestApplication } from '@nestjs/common';

describe('JokeGeneratorController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const jokeGeneratorModule = await Test.createTestingModule({
      imports: [JokeGeneratorModule]
    })
      .compile();

    app = jokeGeneratorModule.createNestApplication();
    await app.init();
  });


    it(`Get Gerador de Piadas`, () => {
      return request(app.getHttpServer())
        .get('/joke-generator')
        .expect(200)
        .then((result) => {
          expect(typeof result.body.value).toBe("string")
        })
    });
});
