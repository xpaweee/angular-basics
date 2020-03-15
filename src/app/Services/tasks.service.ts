import { Task } from './../Model/task';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class TasksService {
  private taskList: Array<Task> = [];
  private doneTaskList: Array<Task> = [];

  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  private doneTaskListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.taskList = [
      {name: 'Zadanie1', created: new Date()},
      {name: 'Zadanie2', created: new Date()},
      {name: 'Zadanie 3', created: new Date()}];

    this.taskListObs.next(this.taskList);

  }


  add(task: Task) {
    this.taskList.push(task);
    this.doneTaskListObs.next(this.taskList);
  }
  remove(task: Task) {
    this.taskList = this.taskList.filter( e => e !== task);
    this.doneTaskListObs.next(this.taskList);
  }
  done(task: Task) {
    this.doneTaskList.push(task);
    this.remove(task);
    this.doneTaskListObs.next(this.doneTaskList);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }
  getDoneTasksListObs(): Observable<Array<Task>> {
    return this.doneTaskListObs.asObservable();
  }


}
