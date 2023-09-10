import { HttpStatus, Injectable, InternalServerErrorException, Req, Res } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductRequestDto } from "./dto/product.dto";
import { Response, Request } from 'express';
import { UpdateProductDto } from "./dto/update-product.dto";



@Injectable()
export class ProductsLogic {
    constructor(private readonly productsService: ProductsService) { }

    async createLogic(data: ProductRequestDto, @Res() res: Response, @Req() request: Request) {
        try {

            //TODO busca pelo nome

            let payload = {
                name: data.name,
                description: data.description,
                price: data.price,
                created_at: new Date,
                update_at: new Date,
                created_by: 1,
                updated_by: 1
            }

            const resp = await this.productsService.create(payload)

            return res.status(HttpStatus.CREATED).send({
                "success": true
            })

        } catch (error) {
            console.log(error)
        }
    }

    async findAllLogic(@Res() res: Response, @Req() request: Request) {
        try {

            const resp = await this.productsService.findAll()

            if (resp) {
                return res.status(HttpStatus.OK).send({
                    ...resp,
                })
            }

            return res.status(HttpStatus.OK).send({
                "message": "No products"
            })

        } catch (error) {
            console.log(error)
        }
    }

    async findOneLogic(id: string, @Res() res: Response, @Req() request: Request) {
        try {

            const resp = await this.productsService.findOne(id)

            if (resp) {
                return res.status(HttpStatus.OK).send({
                    "_id": resp._id,
                    "name": resp.name,
                    "description": resp.description,
                    "price": resp.price,
                    "created_at": resp.created_at,
                    "update_at": resp.update_at,
                    "created_by": resp.created_by,
                    "updated_by": resp.updated_by,
                })
            }

            return res.status(HttpStatus.OK).send({
                "success": true,
                "message": "Product not found"
            })

        } catch (error) {
            console.log(error)
        }
    }

    async updateLogic(id: string, data: UpdateProductDto, @Res() res: Response, @Req() request: Request) {
        try {

            let product: any = await this.productsService.findOne(id)

            if (product) {
                let payload = {
                    _id: product._id,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    created_at: product.created_at,
                    update_at: new Date,
                    created_by: product.created_by,
                    updated_by: 1
                }

                const resp = await this.productsService.update(id, payload)

                if (resp.modifiedCount > 1) {
                    return res.status(HttpStatus.OK).send({
                        "success": true
                    })
                }

                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                    "success": false,
                    "message": 'Internal Server Error'
                })
            }

            return res.status(HttpStatus.OK).send({
                "success": true,
                "message": "Product not found"
            })

        } catch (error) {
            console.log(error)
        }
    }

    async removeLogic(id: string, @Res() res: Response, @Req() request: Request) {
        try {

            let product: any = this.productsService.findOne(id)

            if (product) {
                const resp = await this.productsService.remove(id)

                return res.status(HttpStatus.OK).send({
                    "success": true
                })
            }

            return res.status(HttpStatus.OK).send({
                "success": true,
                "message": "Product not found"
            })

        } catch (error) {
            console.log(error)
        }
    }
}