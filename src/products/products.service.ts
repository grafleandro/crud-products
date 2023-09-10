import { error } from 'console';
import { ProductsModule } from './products.module';
import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {

  constructor(
    @InjectModel(Product.name)
    private readonly ProductsModule: Model<Product>
  ) { }

  async create(ProductDto: ProductDto) {
    return await this.ProductsModule.create(ProductDto)
  }

  async findAll() {
    return await this.ProductsModule.find()
  }

  async findOne(id: string) {
    return await this.ProductsModule.findOne({_id: id})

  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      return await this.ProductsModule.updateOne({_id: id, ...updateProductDto})
    }catch(error){
      console.log(error);
    }
  }

  async remove(id: string) {
    return await this.ProductsModule.deleteOne({_id: id})
  }
}
