import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudeCytoComponent } from './etude-cyto.component';

describe('EtudeCytoComponent', () => {
  let component: EtudeCytoComponent;
  let fixture: ComponentFixture<EtudeCytoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudeCytoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudeCytoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
