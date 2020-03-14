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

 inputText = 'Testowy Tekst';
 maxLength = 5;
 colorClass = 'color';
 logoUrl = '';
 isDisable = true;
 profession = 'programista';
 skill = 'Anuglar';


 constructor() {
   this.dogs.push(new Dog('Reksio', 4), new Dog('Forest', 10), new Dog('Max', 1));

  //  setTimeout(() => {
  //    this.isDisable = false;
  //  }, 3000);

 }


 saveP(event) {
   this.profession = event.traget.value;
 }

 saveS(event) {
   this.skill = event.traget.value;
 }
 onFocus() {
   this.colorClass = 'color';
 }
 onClick(event) {
  console.log(event);
 }
 onMouseMove(event) {
   console.log('x: ' + event.clientX + ' y: ' + event.clientY);
 }
 onPaste() {
   this.inputText = 'Nie wklejaj, wpisz!';
 }

 hejka() {
   return 'hejka';
 }

 change() {
   this.inputText = 'Zmiana tekstu i koloru';
   this.maxLength = 10;
   this.colorClass = 'color2';
   this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
   this.isDisable = false;
 }

}

class Dog {
  constructor(public name: string, public age: number) {
  }
  showDog() {
    return 'Moje pies to ' + this.name + ' i ma: ' + this.age + ' latka';
  }
}


