import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndrogeneComponent } from './androgene.component';

describe('AndrogeneComponent', () => {
  let component: AndrogeneComponent;
  let fixture: ComponentFixture<AndrogeneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndrogeneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndrogeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
