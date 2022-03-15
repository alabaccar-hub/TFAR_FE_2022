import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssaiCytoComponent } from './essai-cyto.component';

describe('EssaiCytoComponent', () => {
  let component: EssaiCytoComponent;
  let fixture: ComponentFixture<EssaiCytoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssaiCytoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EssaiCytoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
