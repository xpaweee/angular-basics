import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zadanie3Component } from "./Zadanie3Component";

describe('Zadanie3Component', () => {
  let component: Zadanie3Component;
  let fixture: ComponentFixture<Zadanie3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zadanie3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zadanie3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
