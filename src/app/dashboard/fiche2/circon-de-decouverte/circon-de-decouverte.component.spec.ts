import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirconDeDecouverteComponent } from './circon-de-decouverte.component';

describe('CirconDeDecouverteComponent', () => {
  let component: CirconDeDecouverteComponent;
  let fixture: ComponentFixture<CirconDeDecouverteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirconDeDecouverteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CirconDeDecouverteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
