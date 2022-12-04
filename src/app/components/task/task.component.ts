import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {

  @Input() task: ITask | undefined;
  @Output() deleteTaskMethod: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(){
    console.log("Eliminar tarea", this.task?.title);
    this.deleteTaskMethod.emit(this.task); //Notificamos al componente superior la tarea a eliminar.
  }

}
