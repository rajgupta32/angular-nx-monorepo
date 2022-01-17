import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@first-monorepo/data';


@Component({
  selector: 'first-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'to-do';
  name = 'Rajan Gupta';

  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.getTodo();
  }

  getTodo() {
    this.http.get<Todo[]>('/api/todos').subscribe((data)=> {
      this.todos = data;
    })
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(()=> {
      this.getTodo();
    })
    // this.todos.push({
    //   title: `New todo ${Math.floor(Math.random() * 1000)}`
    // })
  }
}
