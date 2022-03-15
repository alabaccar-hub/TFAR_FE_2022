import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismeDtDialogComponent } from './organisme-dt-dialog.component';

describe('OrganismeDtDialogComponent', () => {
  let component: OrganismeDtDialogComponent;
  let fixture: ComponentFixture<OrganismeDtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganismeDtDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismeDtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
