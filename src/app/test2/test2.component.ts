import { Component, OnInit } from '@angular/core';
// //inline component
@Component({
  selector: 'app-test2',
  template: `<p> test2 works ! </p>`,
  styles: [`p{color: red}`]
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
