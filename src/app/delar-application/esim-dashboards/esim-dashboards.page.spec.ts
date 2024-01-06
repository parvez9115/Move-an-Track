import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsimDashboardsPage } from './esim-dashboards.page';

describe('EsimDashboardsPage', () => {
  let component: EsimDashboardsPage;
  let fixture: ComponentFixture<EsimDashboardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsimDashboardsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsimDashboardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
