import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmwareAis140ViewPage } from './firmware-ais140-view.page';

describe('FirmwareAis140ViewPage', () => {
  let component: FirmwareAis140ViewPage;
  let fixture: ComponentFixture<FirmwareAis140ViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmwareAis140ViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmwareAis140ViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
