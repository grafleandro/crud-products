import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes, Types } from "mongoose";

@Schema()
export class Product extends Document {

    id: string

    @Prop({type: SchemaTypes.String})
    name: string

    @Prop({type: SchemaTypes.String})
    description: string

    @Prop({type: SchemaTypes.Number})
    price: number

    @Prop({type: SchemaTypes.String, default: () => Date.now()})
    created_at: Date

    @Prop({type: SchemaTypes.Date})
    update_at: Date 

    @Prop({type: SchemaTypes.Number})
    created_by: number

    @Prop({type: SchemaTypes.Number})
    updated_by: number
}

export const ProductEntity = SchemaFactory.createForClass(Product);
