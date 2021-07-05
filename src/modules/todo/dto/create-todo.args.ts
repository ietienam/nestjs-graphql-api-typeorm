import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateTodoInput')
export class CreateTodoInput {
  @Field()
  title: string;

  @Field()
  body: string;
}
