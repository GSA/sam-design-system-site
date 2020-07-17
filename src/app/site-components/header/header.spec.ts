import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { SiteHeaderComponent } from './header.component';

describe(`SiteHeaderComponent tests`, () => {
  let comp: SiteHeaderComponent;
  let fixture: ComponentFixture<SiteHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteHeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(SiteHeaderComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges(); // trigger initial data binding
  });

  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });
});
