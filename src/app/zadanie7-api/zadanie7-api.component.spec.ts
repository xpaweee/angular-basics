import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zadanie7APIComponent } from './zadanie7-api.component';

describe('Zadanie7APIComponent', () => {
  let component: Zadanie7APIComponent;
  let fixture: ComponentFixture<Zadanie7APIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zadanie7APIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zadanie7APIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
