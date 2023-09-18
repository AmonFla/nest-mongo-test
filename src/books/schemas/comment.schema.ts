import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop()
  title: string;

  @Prop()
  stars: number;

  @Prop()
  comment: string;

  @Prop({ type: mongoose.Schema.Types.String, ref: 'User' })
  username: User;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
