import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zadanie5aComponent } from './zadanie5a.component';

describe('Zadanie5aComponent', () => {
  let component: Zadanie5aComponent;
  let fixture: ComponentFixture<Zadanie5aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zadanie5aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zadanie5aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
