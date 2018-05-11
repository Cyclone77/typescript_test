import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterFaceComponent } from './inter-face.component';

describe('InterFaceComponent', () => {
  let component: InterFaceComponent;
  let fixture: ComponentFixture<InterFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
