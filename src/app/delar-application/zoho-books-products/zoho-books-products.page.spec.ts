import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZohoBooksProductsPage } from './zoho-books-products.page';

describe('ZohoBooksProductsPage', () => {
  let component: ZohoBooksProductsPage;
  let fixture: ComponentFixture<ZohoBooksProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZohoBooksProductsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZohoBooksProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
