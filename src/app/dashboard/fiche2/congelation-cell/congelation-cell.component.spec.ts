import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongelationCellComponent } from './congelation-cell.component';

describe('CongelationCellComponent', () => {
  let component: CongelationCellComponent;
  let fixture: ComponentFixture<CongelationCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongelationCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongelationCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
