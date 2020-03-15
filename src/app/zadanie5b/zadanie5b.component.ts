import { Component, OnInit } from '@angular/core';
import { ClickService } from '../Services/click.service';

@Component({
  selector: 'app-zadanie5b',
  templateUrl: './zadanie5b.component.html',
  styleUrls: ['./zadanie5b.component.css']
})
export class Zadanie5bComponent implements OnInit {

  constructor(private clickService: ClickService) { }

  click = 0;
  ngOnInit(): void {
  }
  add() {
    this.click += 1;
    this.clickService.addClicks();
  }


}
