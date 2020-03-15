import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../Services/tasks.service';
import { Task } from '../Model/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {


// @Input()
doneTaskList: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getDoneTasksListObs().subscribe(task => {
      this.doneTaskList = task;
    });
   }

  ngOnInit(): void {
  }

}
