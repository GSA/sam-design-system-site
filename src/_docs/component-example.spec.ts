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
import { SpinnerExampleComponent } from './components/spinner/component-example';
import { TabsExampleComponent } from './components/tabs/component-example';
import { SamUploadComponentExampleComponent } from './components/upload/component-example';
import { ClickOutsideExampleComponent } from './directives/click-outside/component-example';
import { SamDragDropDirectiveExampleComponent } from './directives/drag-drop/component-example';
import { SamExternalLinkDirectiveExampleComponent } from './directives/external-link/component-example';
import { SamFocusDirectiveExampleComponent } from './directives/focus/component-example';
import { StickyExampleComponent } from './directives/sticky/component-example';
import { TabOutsideExampleComponent } from './directives/tab-outside/component-example';
import { ButtonExampleComponent } from './elements/button/component-example';
import { SamBoxComponentExampleComponent } from './experimental/box/component-example';
import { SamContainerComponentExampleComponent } from './experimental/container/component-example';
import { SamDollarComponentExampleComponent } from './experimental/dollar/component-example';
import { SamFilterDrawerComponentExampleComponent } from './experimental/filter-drawer/component-example';
import { SamHeadingComponentExampleComponent } from './experimental/heading/component-example';
import { SamIconComponentExampleComponent } from './experimental/icon/component-example';
import { SamInputMaskComponentExampleComponent } from './experimental/input-mask/component-example';
import { SamLabelNextComponentExampleComponent } from './experimental/label/component-example';
import { SamLabelInfoComponentExampleComponent } from './experimental/label-info/component-example';
import { SamListComponentExampleComponent } from './experimental/list/component-example';
import { SamMasterPageComponentExampleComponent } from './experimental/master-page/component-example';
import { SamPageSampleComponentExampleComponent } from './experimental/page/component-example';
import { SamPageTitleExampleComponent } from './experimental/page-title/component-example';
import { SamSearchComponentExampleComponent } from './experimental/search/component-example';
import { SamSidebarComponentExampleComponent } from './experimental/sidebar/component-example';
import { SamTitleComponentExampleComponent } from './experimental/title/component-example';
import { SamVideoPlayerComponentExampleComponent } from './experimental/video-player/component-example';
import { SamYoutubeComponentExampleComponent } from './experimental/youtube/component-example';
import { AutocompleteExampleComponent } from './form-controls/autocomplete/component-example';
import { AutocompleteMultiselectExampleComponent } from './form-controls/autocomplete-multiselect/component-example';
import { SortExampleComponent } from './experimental/sort/component-example';
import { SdsPaginationExampleComponent } from './experimental/sds-pagination/component-example';
// import { AutocompleteExampleComponent } from './form-controls/autocomplete/component-example';
// import { AutocompleteExampleComponent } from './form-controls/autocomplete/component-example';
// import { AutocompleteExampleComponent } from './form-controls/autocomplete/component-example';


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
    SpinnerExampleComponent,
    TabsExampleComponent,
    SamUploadComponentExampleComponent,
    ClickOutsideExampleComponent,
    SamDragDropDirectiveExampleComponent,
    //SamExternalLinkDirectiveExampleComponent,
    SamFocusDirectiveExampleComponent,
    StickyExampleComponent,
    TabOutsideExampleComponent,
    ButtonExampleComponent,
    SamBoxComponentExampleComponent,
    SamContainerComponentExampleComponent,
    SamDollarComponentExampleComponent,
    SamFilterDrawerComponentExampleComponent,
    SamHeadingComponentExampleComponent,
    SamIconComponentExampleComponent,
    SamInputMaskComponentExampleComponent,
    SamLabelNextComponentExampleComponent,
    SamLabelInfoComponentExampleComponent,
    SamListComponentExampleComponent,
    SamMasterPageComponentExampleComponent,
    SamPageSampleComponentExampleComponent,
    SamPageTitleExampleComponent,
    SamSearchComponentExampleComponent,
    SamSidebarComponentExampleComponent,
    SamTitleComponentExampleComponent,
    SamVideoPlayerComponentExampleComponent,
    SamYoutubeComponentExampleComponent,
    AutocompleteExampleComponent,
    AutocompleteMultiselectExampleComponent,
    SortExampleComponent,
    SdsPaginationComponentExampleComponent,
];

for(let i = 0; i < components.length; i++){
    describe(components[i].constructor.name + ` tests`, () => {

            let comp;
            let fixture;

            beforeEach(() => {

                TestBed.configureTestingModule({
                imports: [RouterTestingModule, HttpClientModule],
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
