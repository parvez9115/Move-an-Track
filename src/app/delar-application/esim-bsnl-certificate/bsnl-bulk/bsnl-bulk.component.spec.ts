import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsnlBulkComponent } from './bsnl-bulk.component';

describe('BsnlBulkComponent', () => {
  let component: BsnlBulkComponent;
  let fixture: ComponentFixture<BsnlBulkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsnlBulkComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsnlBulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
