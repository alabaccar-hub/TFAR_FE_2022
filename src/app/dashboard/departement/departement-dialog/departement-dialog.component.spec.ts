import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementDialogComponent } from './departement-dialog.component';

describe('DepartementDialogComponent', () => {
  let component: DepartementDialogComponent;
  let fixture: ComponentFixture<DepartementDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
