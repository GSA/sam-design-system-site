// Angular Dependencies
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AccordionExampleComponent,AccordionExampleDummyComponent } from "./accordion/component-example";
import { AlertExampleComponent } from "./alerts/component-example";
import { BannerExampleComponent } from "./banner/component-example";
import { ButtonExampleComponent } from "./form-controls/button/component-example";
import { CheckboxExampleComponent } from "./form-controls/checkbox/component-example";
import { DateExampleComponent } from "./form-controls/date/component-example";
import { DateTimeExampleComponent } from "./form-controls/datetime/component-example";
import { FooterExampleComponent } from "./footer/component-example";
import { HeaderExampleComponent } from "./header/component-example";
import { HeaderLinksExampleComponent } from "./header-links/component-example";
import { LabelExampleComponent } from "./label/component-example";
import { ModalExampleComponent } from "./modal/component-example";
import { MultiselectDropdownExampleComponent } from "./multiselect-dropdown/component-example";
import { PaginationExampleComponent } from "./pagination/component-example";
import { POCExampleComponent } from "./point-of-contact/component-example";
import { SearchHeaderExampleComponent } from "./search-header/component-example";
import { StickyExampleComponent } from "./sticky/component-example";
import { TabsExampleComponent } from "./tabs/component-example";

import { DocTemplateComponent } from "./doc.template";
import { routing } from "./doc.routes";

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [
    AccordionExampleComponent,
    AccordionExampleDummyComponent,
    AlertExampleComponent,
    BannerExampleComponent,
    ButtonExampleComponent,
    CheckboxExampleComponent,
    DateExampleComponent,
    DateTimeExampleComponent,
    FooterExampleComponent,
    HeaderExampleComponent,
    HeaderLinksExampleComponent,
    LabelExampleComponent,
    ModalExampleComponent,
    MultiselectDropdownExampleComponent,
    PaginationExampleComponent,
    POCExampleComponent,
    SearchHeaderExampleComponent,
    StickyExampleComponent,
    TabsExampleComponent,
    DocTemplateComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    routing
  ],
  exports: [
  ]
})
export class DocModule { }
