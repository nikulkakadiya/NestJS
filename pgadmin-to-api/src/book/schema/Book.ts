import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  title: String;

  @Prop()
  author: String;

  @Prop()
  published: Number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
