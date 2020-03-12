import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basics';
  tasksList = ['Sprzatanie', 'Gotowanie'];
  selected(task: string) {
    console.log(task);

  }
}
