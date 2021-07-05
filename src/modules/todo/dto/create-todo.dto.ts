import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('CreateTodoDto')
export class CreateTodoDto {
  @Field()
  title: string;

  @Field()
  body: string;

  @Field()
  isCompleted?: boolean;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
