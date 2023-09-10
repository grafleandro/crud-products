import { HttpStatus } from '@nestjs/common';
import { ProductsLogic } from './products.logic';
import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { Response, Request } from 'express';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly ProductsLogic: ProductsLogic) {}

  @Post()
  async create(@Body() ProductDto: ProductDto, @Res() res: Response, @Req() request: Request) {
    try{
      return  await this.ProductsLogic.createLogic(ProductDto, res, request);
    }catch(error){
      console.error(error);
    }
  }

  @Get()
  findAll(@Res() res: Response, @Req() request: Request) {
     return this.ProductsLogic.findAllLogic(res, request);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response, @Req() request: Request) {
     return this.ProductsLogic.findOneLogic(id, res, request);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto, @Res() res: Response, @Req() request: Request) {
     return this.ProductsLogic.updateLogic(id, updateProductDto,res, request);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response, @Req() request: Request) {
     return this.ProductsLogic.removeLogic(id, res, request);
  }
}
