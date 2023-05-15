import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {

  newTodo: Todo = {title:'', priority:1, description: ''}

  @Output() todoCreated: EventEmitter<Todo> = new EventEmitter()

  saveTodo(){
    console.log(this.newTodo);
    this.todoCreated.emit({...this.newTodo});
  }
}
