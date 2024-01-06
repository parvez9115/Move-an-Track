import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitelistingMasterDetailPage } from './whitelisting-master-detail.page';

describe('WhitelistingMasterDetailPage', () => {
  let component: WhitelistingMasterDetailPage;
  let fixture: ComponentFixture<WhitelistingMasterDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhitelistingMasterDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitelistingMasterDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
