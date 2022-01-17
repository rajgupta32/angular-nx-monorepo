import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '@first-monorepo/data';

@Component({
  selector: 'first-monorepo-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
