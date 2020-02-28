import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
// Load the implementations that should be tested
import { StaticPageComponent } from './static.component';
import { MarkdownService } from '../app/services/markdown/markdown.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';

describe(`StaticPageComponent tests`, () => {
  let comp: StaticPageComponent;
  let fixture: ComponentFixture<StaticPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ StaticPageComponent ],
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
            provide: ActivatedRoute,
            useValue: {
                data: Observable.of({markdownfile: 'test'})
            }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(StaticPageComponent);
    comp    = fixture.componentInstance;
    fixture.detectChanges(); // trigger initial data binding
  });

  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });


});
