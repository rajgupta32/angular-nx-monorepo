import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@first-monorepo/data';

@Injectable({
  providedIn: 'root'
})

export class ToDoService {

  constructor(private http: HttpClient) {
    this.getTodo();
  }

  getTodo() {
    return this.http.get<Todo[]>('/api/todos');
  }

  addTodo(data: any) {
    return this.http.post('/api/addTodo', data);
  }
}
