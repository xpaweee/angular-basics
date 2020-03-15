import { TasksService } from './../Services/tasks.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../Model/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;
  // @Output()
  // emitTask = new EventEmitter<string>();
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  add() {
    // this.emitTask.emit(this.newTask);
    const task: Task = ({name: this.newTask, created: new Date()});
    this.tasksService.add(task);
    this.newTask = '';
  }

}
