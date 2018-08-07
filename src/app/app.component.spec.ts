import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MockBackend} from "@angular/http/testing";
import { HttpModule } from '@angular/http';
// Load the implementations that should be tested
import { AppComponent } from './app.component';
import { SamTitleService } from './services/title/title.service';
import { DocumentationService } from './services/documentation.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Subscription } from 'rxjs/Subscription';

describe(`App`, () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule,RouterTestingModule,BrowserAnimationsModule],
      declarations: [ AppComponent ],
      providers: [
        SamTitleService, 
        DocumentationService,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(AppComponent);
    comp    = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding
  });

  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });


});
