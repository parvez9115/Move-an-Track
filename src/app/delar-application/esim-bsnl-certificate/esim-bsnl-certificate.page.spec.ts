import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsimBsnlCertificatePage } from './esim-bsnl-certificate.page';

describe('EsimBsnlCertificatePage', () => {
  let component: EsimBsnlCertificatePage;
  let fixture: ComponentFixture<EsimBsnlCertificatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsimBsnlCertificatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsimBsnlCertificatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
