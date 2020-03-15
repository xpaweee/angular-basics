import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zadanie6Component } from './zadanie6.component';

describe('Zadanie6Component', () => {
  let component: Zadanie6Component;
  let fixture: ComponentFixture<Zadanie6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zadanie6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zadanie6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
