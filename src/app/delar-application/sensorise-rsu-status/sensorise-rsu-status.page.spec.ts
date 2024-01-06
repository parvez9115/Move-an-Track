import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoriseRsuStatusPage } from './sensorise-rsu-status.page';

describe('SensoriseRsuStatusPage', () => {
  let component: SensoriseRsuStatusPage;
  let fixture: ComponentFixture<SensoriseRsuStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensoriseRsuStatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensoriseRsuStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
