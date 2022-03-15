import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismeDialogComponent } from './organisme-dialog.component';

describe('OrganismeDialogComponent', () => {
  let component: OrganismeDialogComponent;
  let fixture: ComponentFixture<OrganismeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganismeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
