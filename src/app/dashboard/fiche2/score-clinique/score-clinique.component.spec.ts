import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCliniqueComponent } from './score-clinique.component';

describe('ScoreCliniqueComponent', () => {
  let component: ScoreCliniqueComponent;
  let fixture: ComponentFixture<ScoreCliniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreCliniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCliniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
