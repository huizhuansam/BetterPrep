import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionDocument = HydratedDocument<Question>;

@Schema()
export class Question {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  complexity: 'easy' | 'medium' | 'hard';

  @Prop({ required: true })
  description: string;

  @Prop([String])
  categories: string[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
