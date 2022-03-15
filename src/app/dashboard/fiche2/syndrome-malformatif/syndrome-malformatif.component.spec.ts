import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyndromeMalformatifComponent } from './syndrome-malformatif.component';

describe('SyndromeMalformatifComponent', () => {
  let component: SyndromeMalformatifComponent;
  let fixture: ComponentFixture<SyndromeMalformatifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyndromeMalformatifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyndromeMalformatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
