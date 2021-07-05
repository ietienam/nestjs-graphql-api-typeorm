import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}
  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async findById(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOne(id);
    if (todo) {
      return todo;
    }
    throw new NotFoundException(`Todo not found`);
  }

  async create(data: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepository.create(data);
    if (todo) {
      return this.todoRepository.save(todo);
    }
    throw new BadRequestException('Failed to add todo');
  }

  async update(id: number, data: UpdateTodoDto): Promise<Todo> {
    const todo = await this.todoRepository.preload({ id, ...data });
    if (todo) {
      return this.todoRepository.save(todo);
    }
    throw new NotFoundException(`Todo not found`);
  }

  async delete(id: number) {
    const todo = await this.todoRepository.findOne(id);
    if (todo) {
      return this.todoRepository.remove(todo);
    }
    throw new NotFoundException(`Todo not found`);
  }
}
