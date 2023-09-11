import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductEntity } from './entities/product.entity';
import { ProductsLogic } from './products.logic';
import { ConfigModule } from '@nestjs/config';
import { config } from '../config';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductsLogic],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_HOST,
        dbName: 'crud',
      }),
    }),
    MongooseModule.forFeature([{
      name: Product.name,
      schema: ProductEntity
    }])
  ],
  exports: [ProductsService]
})
export class ProductsModule { }
