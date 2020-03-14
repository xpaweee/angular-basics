import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zadanie4',
  templateUrl: './zadanie4.component.html',
  styleUrls: ['./zadanie4.component.css']
})
export class Zadanie4Component implements OnInit {

  constructor() { }
  @Input()
  tasks;

  taskTst = 'TEST';
  ngOnInit(): void {
  }

}
