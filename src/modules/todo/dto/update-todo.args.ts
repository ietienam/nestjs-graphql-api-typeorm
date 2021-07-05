import { Field, InputType } from '@nestjs/graphql';

@InputType('UpdateTodoInput')
export class UpdateTodoInput {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  body?: string;

  @Field({ nullable: true })
  isCompleted?: boolean;
}
