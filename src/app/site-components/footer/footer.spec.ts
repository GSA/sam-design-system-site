import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { SiteFooterComponent } from './footer.component';

describe(`SiteFooterComponent tests`, () => {
  let comp: SiteFooterComponent;
  let fixture: ComponentFixture<SiteFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteFooterComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(SiteFooterComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges(); // trigger initial data binding
  });

  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });
});
