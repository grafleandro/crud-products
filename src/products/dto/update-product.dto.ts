import { PartialType } from '@nestjs/mapped-types';
import { ProductDto } from './product.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(ProductDto) {
    @IsString()
    @IsNotEmpty()
    _id:string
}
