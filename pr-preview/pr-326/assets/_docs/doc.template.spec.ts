import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

// Load the implementations that should be tested
import { DocTemplateComponent } from './doc.template';


describe(`DocTemplateComponent tests`, () => {
  let comp: DocTemplateComponent;
  let fixture: ComponentFixture<DocTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ DocTemplateComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(DocTemplateComponent);
    comp    = fixture.componentInstance;
    fixture.detectChanges(); // trigger initial data binding
  });

  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });


});
