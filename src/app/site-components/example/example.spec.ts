import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

// Load the implementations that should be tested
import { ExampleComponent } from './example.component';

describe(`ExampleComponent tests`, () => {
  let comp: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ExampleComponent);
    comp    = fixture.componentInstance;
    fixture.detectChanges(); // trigger initial data binding
  });

  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });


});
