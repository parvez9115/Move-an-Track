import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoriceAdvancePaymentPage } from './sensorice-advance-payment.page';

describe('SensoriceAdvancePaymentPage', () => {
  let component: SensoriceAdvancePaymentPage;
  let fixture: ComponentFixture<SensoriceAdvancePaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensoriceAdvancePaymentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensoriceAdvancePaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
