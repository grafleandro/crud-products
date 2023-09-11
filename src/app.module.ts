import { ConfigModule } from '@nestjs/config';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { JokeGeneratorModule } from './joke-generator/joke-generator.module';
import { config } from './config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthMiddleware } from './auth.middleware';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [
    ProductsModule, 
    JokeGeneratorModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_HOST,
        dbName: 'crud',
      }),
  })
  ],
  controllers: [AppController],
  providers: [AppService],
  
  
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'products', method: RequestMethod.GET },
        { path: 'products/:id', method: RequestMethod.GET },
      )
      .forRoutes(ProductsController);
  }
}
