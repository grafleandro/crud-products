import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductEntity } from './entities/product.entity';
import { ProductsLogic } from './products.logic';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductsLogic],
  imports: [
    MongooseModule.forFeature([{ 
      name: Product.name, 
      schema: ProductEntity 
    }])
  ],
  exports: [ProductsService]
})
export class ProductsModule {}
