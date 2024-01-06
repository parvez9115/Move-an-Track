import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendOneyearInvoiceDetailsPage } from './extend-oneyear-invoice-details.page';

describe('ExtendOneyearInvoiceDetailsPage', () => {
  let component: ExtendOneyearInvoiceDetailsPage;
  let fixture: ComponentFixture<ExtendOneyearInvoiceDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendOneyearInvoiceDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendOneyearInvoiceDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
