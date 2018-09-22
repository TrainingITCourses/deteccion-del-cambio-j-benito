import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriterionResultsComponent } from './criterion-results.component';

describe('CriterionResultsComponent', () => {
  let component: CriterionResultsComponent;
  let fixture: ComponentFixture<CriterionResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriterionResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriterionResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
