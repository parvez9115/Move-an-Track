import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmwareAis140UploadPage } from './firmware-ais140-upload.page';

describe('FirmwareAis140UploadPage', () => {
  let component: FirmwareAis140UploadPage;
  let fixture: ComponentFixture<FirmwareAis140UploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmwareAis140UploadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmwareAis140UploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
