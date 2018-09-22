import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaTypeComponent } from './criteria-type.component';

describe('CriteriaTypeComponent', () => {
  let component: CriteriaTypeComponent;
  let fixture: ComponentFixture<CriteriaTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriaTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
