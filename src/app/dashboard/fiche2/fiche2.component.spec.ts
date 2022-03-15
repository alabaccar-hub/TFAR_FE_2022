import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiche2Component } from './fiche2.component';

describe('Fiche2Component', () => {
  let component: Fiche2Component;
  let fixture: ComponentFixture<Fiche2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fiche2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fiche2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
