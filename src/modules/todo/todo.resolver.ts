import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateTodoInput } from './dto/create-todo.args';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoInput } from './dto/update-todo.args';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Resolver((of) => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query((returns) => [CreateTodoDto])
  async getTodos() {
    return this.todoService.findAll();
  }

  @Query((returns) => CreateTodoDto)
  async getTodo(
    @Args({ name: 'id', type: () => Int, nullable: false }) id: number,
  ) {
    return this.todoService.findById(id);
  }

  @Mutation((returns) => CreateTodoDto)
  async createTodo(
    @Args('input')
    input: CreateTodoInput,
  ) {
    return this.todoService.create(input);
  }

  @Mutation((returns) => UpdateTodoDto)
  async updateTodo(
    @Args({ name: 'id', type: () => Int, nullable: false }) id: number,
    @Args('input', { nullable: true })
    input: UpdateTodoInput,
  ) {
    return this.todoService.update(id, input);
  }

  @Mutation((returns) => CreateTodoDto)
  async deleteTodo(
    @Args({ name: 'id', type: () => Int, nullable: false }) id: number,
  ) {
    return this.todoService.delete(id);
  }
}
