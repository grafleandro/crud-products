import { ApiProperty } from "@nestjs/swagger"
import { IsEmpty, IsString, IsObject, IsNumber, IsDate, IsNotEmpty } from "class-validator"

export class ProductDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    price: number

    @IsDate()
    created_at: Date 

    @IsDate()
    update_at: Date 

    @IsNumber()
    created_by: number

    @IsNumber()
    updated_by: number
}

export class ProductRequestDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    price: number
}
