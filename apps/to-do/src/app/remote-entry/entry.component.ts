import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@first-monorepo/data';

@Component({
  selector: 'first-monorepo-to-do-entry',
  template: `
  <div class="container">
    <div class="remote-entry">
      <h1>Micro FrontEnd-1</h1>
      <h2 style="text-align: center;">Todo's Remote Entry Component</h2>
    </div>
    <div class="to-do">
      <h1 style="text-align:'center'"><strong>Welcome Todo</strong></h1>
      <first-monorepo-todos [todos]="todos"></first-monorepo-todos>
      <button id="add-todo" (click)="addTodo()">Add Todo</button>
    </div>
  </div>`,
  styles: [
    `
    .container {
      width: 100%;
      background: lightgrey;
    }
    `,
    `
      .remote-entry {
        padding: 5px;
      }
      h1 {
        font-size: 2rem;
        text-align: center;
        padding:15px;
      
      }
    `,
    `
    .to-do {
      width: 300px;
      margin: 5px auto;
    }
    `
  ],
})

export class RemoteEntryComponent {

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
