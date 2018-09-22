import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesCriteriaComponent } from './launches-criteria.component';

describe('LaunchesCriteriaComponent', () => {
  let component: LaunchesCriteriaComponent;
  let fixture: ComponentFixture<LaunchesCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchesCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
