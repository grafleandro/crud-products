import { PartialType } from '@nestjs/mapped-types';
import { ProductDto } from './product.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(ProductDto) {
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    _id?:string
}
