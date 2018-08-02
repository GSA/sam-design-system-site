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

import { AccordionExampleComponent } from './components/accordion/component-example';
import { SamActionButtonExampleComponent } from './components/actions/action-button/component-example';
import { SamActionsDropdownComponentExampleComponent } from './components/actions/actions-dropdown/component-example';
import { AlertExampleComponent } from './components/alert/component-example';
// import { SamAlertFooterComponentExampleComponent } from './components/alert-footer/component-example';
import { SamBadgeComponentExampleComponent } from './components/badge/component-example';
import { SamBreadcrumbsComponentExampleComponent } from './components/breadcrumbs/component-example';
import { SamCommentsComponentExampleComponent } from './components/comments/component-example';
import { DownloadExampleComponent } from './components/download/component-example';
import { HistoryExampleComponent } from './components/history/component-example';
import { SamImageComponentExampleComponent } from './components/image/component-example';
import { ModalExampleComponent } from './components/modal/component-example';
import { MultiselectDropdownExampleComponent } from './components/multiselect-dropdown/component-example';
import { PaginationExampleComponent } from './components/pagination/component-example';
import { POCExampleComponent } from './components/point-of-contact/component-example';
import { SamProgressExampleComponent } from './components/progress-bar/component-example';


let components = [ 
    AccordionExampleComponent,
    SamActionButtonExampleComponent,
    SamActionsDropdownComponentExampleComponent,
    AlertExampleComponent,
    // SamAlertFooterComponentExampleComponent, requires SamAlertFooterService
    SamBadgeComponentExampleComponent,
    SamBreadcrumbsComponentExampleComponent,
    SamCommentsComponentExampleComponent,
    DownloadExampleComponent,
    HistoryExampleComponent,
    SamImageComponentExampleComponent,
    ModalExampleComponent,
    MultiselectDropdownExampleComponent,
    PaginationExampleComponent,
    POCExampleComponent,
    SamProgressExampleComponent,
];

for(let i = 0; i < components.length; i++){
    describe(components[i].constructor.name + ` tests`, () => {
        
            let comp;
            let fixture;

            beforeEach(() => {
                
                TestBed.configureTestingModule({
                imports: [RouterTestingModule, HttpModule],
                declarations: [components[i]],
                providers: [
                    { 
                    provide: MarkdownService,
                    useValue: {
                        get: function(filename){
                        return Observable.of({text:function(){
                            return "hello";
                        }});
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
                
                fixture = TestBed.createComponent(components[i]);
                comp    = fixture.componentInstance;
                fixture.detectChanges(); // trigger initial data binding
                
            });

            it(`should be initialized`, () => {
                expect(fixture).toBeDefined();
                expect(comp).toBeDefined();
            });
        
    });
}
