import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingSummaryReportPage } from './missing-summary-report.page';

describe('MissingSummaryReportPage', () => {
  let component: MissingSummaryReportPage;
  let fixture: ComponentFixture<MissingSummaryReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingSummaryReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingSummaryReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
