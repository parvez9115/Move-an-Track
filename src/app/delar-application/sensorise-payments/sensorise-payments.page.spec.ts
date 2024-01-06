import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorisePaymentsPage } from './sensorise-payments.page';

describe('SensorisePaymentsPage', () => {
  let component: SensorisePaymentsPage;
  let fixture: ComponentFixture<SensorisePaymentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorisePaymentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorisePaymentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
