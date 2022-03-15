import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementDtDialogComponent } from './departement-dt-dialog.component';

describe('DepartementDtDialogComponent', () => {
  let component: DepartementDtDialogComponent;
  let fixture: ComponentFixture<DepartementDtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementDtDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementDtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
