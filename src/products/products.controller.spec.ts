import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import * as request from 'supertest';
import { ProductsModule } from './products.module';
import { INestApplication } from '@nestjs/common';

describe('ProductsController', () => {
  let controller: ProductsController;
  let product = ""

  let app: INestApplication;

  beforeAll(async () => {
    const productsModule = await Test.createTestingModule({
      imports: [ProductsModule]
    })
      .compile();

    app = productsModule.createNestApplication();
    await app.init();
  });
  
  it(`Get all products`, () => {
    return request(app.getHttpServer())
      .get('/products')
      .expect(200)
  });

  it(`Create New products - empty database`, () => {
    return request(app.getHttpServer())
      .post('/products')
      .set('Authorization', process.env.AUTH_TOKEN)
      .send({
        name: "Product 1",
        description: "Product 1 description",
        price: 11
      })
      .expect(201)
      .then((result) => {
        product = result.body.id
        expect(typeof result.body.id).toBe("string")
        expect(typeof result.body.success).toBe("boolean")
      })
  });

  it(`Get One products`, () => {
    return request(app.getHttpServer())
      .get(`/products/${product}`)
      .expect(200)
      .then((result) => {
        expect(typeof result.body._id).toBe("string")
        expect(typeof result.body.name).toBe("string")
        expect(typeof result.body.description).toBe("string")
      })
  });

  it(`Edit One products`, () => {
    return request(app.getHttpServer())
      .put(`/products/${product}`)
      .set('Authorization', process.env.AUTH_TOKEN)
      .send({
        name: "Product 1 Edit",
        description: "Product 1 description",
        price: 12
      })
      .expect(200)
      .then((result) => {
        expect(typeof result.body.success).toBe("boolean")
      })
  },);

  it(`Remove One products`, () => {
    return request(app.getHttpServer())
      .delete(`/products/${product}`)
      .set('Authorization', process.env.AUTH_TOKEN)
      .send({
        id: `${product}`
      })
      .expect(200)
      .then((result) => {
        expect(typeof result.body.success).toBe("boolean")
      })
  });

});
