import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatypeExportComponent } from './datatype-export.component';

describe('DatatypeExportComponent', () => {
  let component: DatatypeExportComponent;
  let fixture: ComponentFixture<DatatypeExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatypeExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatypeExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
