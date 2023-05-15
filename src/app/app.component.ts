import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Todo';

  todos: Todo[] = [
    {
      title: 'Regalo al pane',
      description: 'Compra il profumo che gli piace tanto',
      priority: 3
    },
    {
      title: 'Compra la nonna',
      priority: 1
    },
    {
      title: 'pagare le bollette',
      priority: 2
    }
  ]

  addTodo(todo: Todo){
    this.todos.push(todo);
  }
}
