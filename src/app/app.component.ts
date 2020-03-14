import { Zadanie4Component } from './zadanie4/zadanie4.component';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basics';
  tasksList = ['Sprzatanie', 'Gotowanie'];

  @ViewChild('zadanie4Ref')
  Zadanie4Component: Zadanie4Component;

  @ViewChild('inputText')
  input: ElementRef;

  selected(task: string) {
    console.log(task);

  }
  add(input: HTMLInputElement) {
    this.tasksList.push(input.value);
    this.tasksList.push(this.Zadanie4Component.taskTst);
    //zerowanie pola tesktowego
    this.input.nativeElement.value = '';

  }
}
