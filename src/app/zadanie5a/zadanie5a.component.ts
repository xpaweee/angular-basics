import { ClickService } from './../Services/click.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zadanie5a',
  templateUrl: './zadanie5a.component.html',
  styleUrls: ['./zadanie5a.component.css']
  //incjalizacja
  //providers: [ClickService]
})
export class Zadanie5aComponent implements OnInit {

  click = 0;

  constructor(private clickService: ClickService) { }

  ngOnInit(): void {
  }
  add() {
    this.click += 1;
    this.clickService.addClicks();
  }

}
