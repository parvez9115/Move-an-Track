import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZohoBooksCustomersPage } from './zoho-books-customers.page';

describe('ZohoBooksCustomersPage', () => {
  let component: ZohoBooksCustomersPage;
  let fixture: ComponentFixture<ZohoBooksCustomersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZohoBooksCustomersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZohoBooksCustomersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
