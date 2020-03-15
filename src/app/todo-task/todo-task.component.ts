import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../Services/tasks.service';
import {Task} from '../Model/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];
  // @Input()
  // taksList = [];

  // @Output()
  // emitDone = new EventEmitter<string>();

  // @Output()
  // emitRemove = new EventEmitter<string>();

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((data: Array<Task>) => {
      //zwraca tą sama talibce, ale z nowa referencja. Dzieki temu pipe od sort-name ogarnie i posortuje wartosci
        this.tasksList = data.slice();
      });
  }

  remove(task: Task) {
    // this.emitRemove.emit(task);
    this.tasksService.remove(task);

  }
  done(task: Task) {
    // this.emitDone.emit(task);
    task.end = new Date();
    this.tasksService.add(task);
  }

  ngOnInit(): void {
  }

}
