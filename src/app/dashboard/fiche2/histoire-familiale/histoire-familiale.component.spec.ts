import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoireFamilialeComponent } from './histoire-familiale.component';

describe('HistoireFamilialeComponent', () => {
  let component: HistoireFamilialeComponent;
  let fixture: ComponentFixture<HistoireFamilialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoireFamilialeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoireFamilialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
