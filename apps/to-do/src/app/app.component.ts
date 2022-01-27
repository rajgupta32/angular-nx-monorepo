import { Component } from '@angular/core';
import { Todo } from '@first-monorepo/data';
import { ToDoService } from './services/to-do.service';


@Component({
  selector: 'first-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'to-do';
  name = 'Rajan Gupta';

  todos: Todo[] = [];

  constructor(private todoService: ToDoService) {
    this.getTodo();
  }

  getTodo() {
    this.todoService.getTodo().subscribe((data:Todo[])=> {
      this.todos = data;
    })
  }

  addTodo() {
    this.todoService.addTodo({}).subscribe(()=> {
      this.getTodo();
    })
    // this.todos.push({
    //   title: `New todo ${Math.floor(Math.random() * 1000)}`
    // })
  }
}
