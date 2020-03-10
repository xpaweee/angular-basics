import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
 title = 'Kolego';
 days = ['Poniedzialek', 'Wtorek', 'Sroda', 'Czwartek', 'Piatek', 'Sobota', 'Niedziela'];
 dog = new Dog('Reksio', 4);
 dog2: Dog;
 dogs = new Array<Dog>();
 constructor() {
   this.dogs.push(new Dog('Reksio', 4), new Dog('Forest', 10), new Dog('Max', 1));
 }

 hejka() {
   return 'hejka';
 }

}

class Dog {
  constructor(public name: string, public age: number) {
  }
  showDog() {
    return 'Moje pies to ' + this.name + ' i ma: ' + this.age + ' latka';
  }
}


