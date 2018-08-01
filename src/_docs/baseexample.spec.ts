import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpModule } from '@angular/http';
// Load the implementations that should be tested
import { BaseExampleComponent } from './baseexample.component';
import { MarkdownService } from '../app/services/markdown/markdown.service';
import { DocumentationService } from '../app/services/documentation.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';

describe(`BaseExampleComponent tests`, () => {
  let comp: BaseExampleComponent;
  let fixture: ComponentFixture<BaseExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      declarations: [ BaseExampleComponent ],
      providers: [
        { 
          provide: MarkdownService,
          useValue: {
            get: function(filename){
              return Observable.of({});
            }
          }
        },
        { 
          provide: DocumentationService,
          useValue: {
            loadData: function(){
              return Observable.of({});
            },
            getComponentProperties: function(name){
              return Observable.of([]); 
            }
          }
        },
        {
            provide: ActivatedRoute, useValue: {
            data: Observable.create({ markdownfile: 'test' })
            }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(BaseExampleComponent);
    comp    = fixture.componentInstance;
    fixture.detectChanges(); // trigger initial data binding
  });

  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });


});
