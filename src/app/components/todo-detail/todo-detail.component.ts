import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent {

  @Input() todoDetail?: Todo;
  /*emettitori di output*/
  @Output() todoDeleted: EventEmitter<Todo> = new EventEmitter() /*gli event emitter emettono degli eventi, cosa voglio mandare? lo scrivo nelle angolari e poi lo inizializziamo*/
  deleteTodo(){
  /* Ora usiamo l'EventEmitter*/
    this.todoDeleted.emit(this.todoDetail); /** Quando emit, lancia un messaggio al suo papá per cancellare il tood, lui non puó cancellarlo */
   /* output nome, eventemitter, elemento, dichiarazione classe di EventEmitter. O eventEmitter = new EventEmitter di elemento*/
  }

}
