// Angular Dependencies
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BaseExampleComponent } from "./baseexample.component";
import { PlaceHolderExampleComponent } from "./placeholder.component";


import { AccordionExampleComponent } from "./components/accordion/component-example";
import { AlertExampleComponent } from "./components/alert/component-example";
import { BannerExampleComponent } from "./components/banner/component-example";
import { FooterExampleComponent } from "./components/footer/component-example";
import { HeaderExampleComponent } from "./components/header/component-example";
import { LabelExampleComponent } from "./components/label/component-example";
import { ModalExampleComponent } from "./components/modal/component-example";
import { MultiselectDropdownExampleComponent } from "./components/multiselect-dropdown/component-example";
import { PaginationExampleComponent } from "./components/pagination/component-example";
import { POCExampleComponent } from "./components/point-of-contact/component-example";
import { SearchHeaderExampleComponent } from "./components/search-header/component-example";
import { TabsExampleComponent } from "./components/tabs/component-example";
import { StickyExampleComponent } from "./directives/sticky/component-example";
import { ClickOutsideExampleComponent } from "./directives/click-outside/component-example";
import { ButtonExampleComponent } from "./elements/button/component-example";
import { CheckboxExampleComponent } from "./form-controls/checkbox/component-example";
import { DateExampleComponent } from "./form-controls/date/component-example";
import { DateTimeExampleComponent } from "./form-controls/datetime/component-example";
import { MultiSelectExampleComponent } from "./form-controls/multiselect/component-example";
import { RadioExampleComponent } from "./form-controls/radiobutton/component-example";
import { SearchbarExampleComponent } from "./form-controls/searchbar/component-example";
import { SelectExampleComponent } from "./form-controls/select/component-example";
import { TextExampleComponent } from "./form-controls/text/component-example";
import { TextareaExampleComponent } from "./form-controls/textarea/component-example";
import { TimeExampleComponent } from "./form-controls/time/component-example";
import { NameEntryExampleComponent } from "./form-templates/name-entry/component-example";
import { PhoneEntryExampleComponent } from "./form-templates/phone-entry/component-example";


import { DocTemplateComponent } from "./doc.template";
import { routing } from "./doc.routes";

import { SamUIKitModule } from '../../sam-ui-elements/src/ui-kit';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [
    BaseExampleComponent,
    PlaceHolderExampleComponent,
    AccordionExampleComponent,
    AlertExampleComponent,
    BannerExampleComponent,
    ButtonExampleComponent,
    CheckboxExampleComponent,
    DateExampleComponent,
    DateTimeExampleComponent,
    MultiSelectExampleComponent,
    RadioExampleComponent,
    SearchbarExampleComponent,
    SelectExampleComponent,
    TextExampleComponent,
    TextareaExampleComponent,
    TimeExampleComponent,
    HeaderExampleComponent,
    LabelExampleComponent,
    ModalExampleComponent,
    MultiselectDropdownExampleComponent,
    PaginationExampleComponent,
    POCExampleComponent,
    SearchHeaderExampleComponent,
    StickyExampleComponent,
    ClickOutsideExampleComponent,
    TabsExampleComponent,
    NameEntryExampleComponent,
    PhoneEntryExampleComponent,
    DocTemplateComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    SamUIKitModule,
    routing
  ],
  exports: [
  ]
})
export class DocModule { }
