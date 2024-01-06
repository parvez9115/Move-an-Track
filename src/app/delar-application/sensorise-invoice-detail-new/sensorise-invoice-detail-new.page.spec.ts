import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoriseInvoiceDetailNewPage } from './sensorise-invoice-detail-new.page';

describe('SensoriseInvoiceDetailNewPage', () => {
  let component: SensoriseInvoiceDetailNewPage;
  let fixture: ComponentFixture<SensoriseInvoiceDetailNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensoriseInvoiceDetailNewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensoriseInvoiceDetailNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
