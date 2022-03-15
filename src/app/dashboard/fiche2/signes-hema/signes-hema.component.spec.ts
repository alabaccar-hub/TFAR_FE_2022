import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignesHemaComponent } from './signes-hema.component';

describe('SignesHemaComponent', () => {
  let component: SignesHemaComponent;
  let fixture: ComponentFixture<SignesHemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignesHemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignesHemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
