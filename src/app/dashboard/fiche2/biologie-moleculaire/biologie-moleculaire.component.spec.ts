import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiologieMoleculaireComponent } from './biologie-moleculaire.component';

describe('BiologieMoleculaireComponent', () => {
  let component: BiologieMoleculaireComponent;
  let fixture: ComponentFixture<BiologieMoleculaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiologieMoleculaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiologieMoleculaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
