import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

//oznacza to, że mozna cos tutaj wstrzykiwać np. logservice
@Injectable({
  providedIn: 'root'
})
export class ClickService {

private sumClicks = 0;
private sum = new Subject<number>();

  constructor(private log: LogService) { }

  addClicks() {
    this.sumClicks += 1;
    // informuje inne komponent, że subject dostał/zmienił wartosc
    this.sum.next(this.sumClicks);
    this.log.logger('Klikniecie ' + this.sumClicks);
  }

  getSum(): Observable<number> {
    return this.sum.asObservable();
  }
}
