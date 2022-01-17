import { Injectable } from '@nestjs/common';
import { Todo } from '@first-monorepo/data'


@Injectable()
export class AppService {

  todos: Todo[] = [{title: 'Todo 1'}, {title: 'Todo2'}];

  getData(): { message: string } {
    return { message: 'Welcome to backend!' };
  }

  getTodo(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    });
  }
}
