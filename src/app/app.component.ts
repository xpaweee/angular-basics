import { Zadanie4Component } from './zadanie4/zadanie4.component';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ClickService } from './Services/click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClickService]

})
export class AppComponent implements OnInit {

  constructor(private clickService: ClickService) {

  }
  title = 'angular-basics';
  tasksList = ['Sprzatanie', 'Gotowanie'];

  allClicks: number;
  // tslint:disable-next-line:member-ordering
  @ViewChild('zadanie4Ref')
  Zadanie4Component: Zadanie4Component;

  @ViewChild('inputText')
  input: ElementRef;

  ngOnInit(): void {
    // subksyrbujemy to co pojawai sie w clickservice -> w metodzie getSum()
    this.clickService.getSum().subscribe(data => {
        this.allClicks = data;
      });
  }

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
