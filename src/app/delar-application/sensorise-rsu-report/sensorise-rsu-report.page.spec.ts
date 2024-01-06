import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoriseRsuReportPage } from './sensorise-rsu-report.page';

describe('SensoriseRsuReportPage', () => {
  let component: SensoriseRsuReportPage;
  let fixture: ComponentFixture<SensoriseRsuReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensoriseRsuReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensoriseRsuReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
