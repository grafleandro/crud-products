import { ApiProperty } from "@nestjs/swagger"
import { IsEmpty, IsString, IsObject, IsNumber, IsDate } from "class-validator"

export class CreateProductDto {
    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsNumber()
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
