import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zadanie2',
  templateUrl: './zadanie2.component.html',
  styleUrls: ['./zadanie2.component.css']
})
export class Zadanie2Component implements OnInit {

  taskList: Array<string> = [];
  doneTaskList: Array<string> = [];

  add(task: string) {
    this.taskList.push(task);
  }
  remove(task: string) {
    this.taskList = this.taskList.filter( e => e !== task);
  }
  done(task: string) {
    this.doneTaskList.push(task);
    this.remove(task);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
