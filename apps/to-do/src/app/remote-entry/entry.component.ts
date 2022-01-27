import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@first-monorepo/data';

@Component({
  selector: 'first-monorepo-to-do-entry',
  template: `
  <div class="container">
    <div class="remote-entry">
      <h1>Micro FrontEnd-1</h1>
      <p style="text-align: center; font-size: 1.5rem">Todo's Remote Entry Component</p>
    </div>
    <div class="to-do">
      <p class="greet"><strong>Welcome Todo</strong></p>
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
      .greet {
        font-size: 1.5rem;
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
