import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('UpdateTodoDto')
export class UpdateTodoDto {
  @Field()
  title?: string;

  @Field()
  body?: string;

  @Field()
  isCompleted?: boolean;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
