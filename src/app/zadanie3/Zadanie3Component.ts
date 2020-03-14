import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-zadanie3',
  templateUrl: './zadanie3.component.html',
  styleUrls: ['./zadanie3.component.css']
})
// tslint:disable-next-line:max-line-length
export class Zadanie3Component implements OnChanges, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input()
  inputText: string;
  show = true;
  constructor() { }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterViewChecked(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterContentInit(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterContentChecked(): void {
    throw new Error("Method not implemented.");
  }
  //Przy kazdej zmianie / evenecie
  ngDoCheck(): void {
    throw new Error('Method not implemented.');
  }
  // Sprawdza czy zmieniły sie pola typu input
  // Wywoluje sie przed ngOnInit
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  // Wywoluje sie jako po drugie - po konstruktorze(iniclzajizacji)
  // Dobre miejsce do operowanie na propertkach.
  ngOnInit(): void {
  }
  content() {
    this.show = !this.show;
  }
}
