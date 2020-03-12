import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // mozliwosc wystawienie tej propertki do app.component
  // do niej przypisywane sa wartosci z app.component ts
  //app-child <- komponent
  @Input()
  tasks;

  //przesyłanie wartosci do rodzica -> app.component
  // @Output()
  // eventTask = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // select(task) {
  //   this.eventTask.emit(task);
  // }

}
