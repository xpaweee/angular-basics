import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zadanie5bComponent } from './zadanie5b.component';

describe('Zadanie5bComponent', () => {
  let component: Zadanie5bComponent;
  let fixture: ComponentFixture<Zadanie5bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zadanie5bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zadanie5bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
