import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { liveTrackPage } from "./live-track.page";

describe("liveTrackPage", () => {
  let component: liveTrackPage;
  let fixture: ComponentFixture<liveTrackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [liveTrackPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(liveTrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
