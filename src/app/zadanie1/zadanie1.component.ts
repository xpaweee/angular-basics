import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zadanie1',
  templateUrl: './zadanie1.component.html',
  styleUrls: ['./zadanie1.component.css']
})
export class Zadanie1Component  {

  constructor() { }

  newTask: string;
  taskList: Array<string> = [];
  doneTaskList: Array<string> = [];

  add() {
    this.taskList.push(this.newTask);
    this.newTask = '';
    console.log(this.taskList);
  }
  remove(task: string) {
    this.taskList = this.taskList.filter( e => e !== task);
  }
  done(task: string) {
    this.doneTaskList.push(task);
    this.remove(task);
  }

}
