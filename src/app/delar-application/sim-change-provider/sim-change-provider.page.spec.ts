import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimChangeProviderPage } from './sim-change-provider.page';

describe('SimChangeProviderPage', () => {
  let component: SimChangeProviderPage;
  let fixture: ComponentFixture<SimChangeProviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimChangeProviderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimChangeProviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
