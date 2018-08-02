import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

// Load the implementations that should be tested
import { CodeExampleComponent } from './code.component';

describe(`CodeExampleComponent tests`, () => {
  let comp: CodeExampleComponent;
  let fixture: ComponentFixture<CodeExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeExampleComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(CodeExampleComponent);
    comp    = fixture.componentInstance;
    comp.code = "<p>hello</p>";
    comp.language = "english";
    fixture.detectChanges(); // trigger initial data binding
  });

  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });


});
