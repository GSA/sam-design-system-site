import { Routes, RouterModule } from '@angular/router';

import { PlaceHolderExampleComponent } from "./placeholder.component";

import { AccordionExampleComponent } from "./components/accordion/component-example";
import { AlertExampleComponent } from "./components/alerts/component-example";
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

//manual map, components that don't have documentation set up yet get pointed to the PlaceHolderExampleComponent
const map = {
  'doc-placeholder':PlaceHolderExampleComponent,
  'components/accordion':AccordionExampleComponent,
  'components/alert':AlertExampleComponent,
  'components/banner':BannerExampleComponent,
  'components/footer':FooterExampleComponent,
  'components/header':HeaderExampleComponent,
  'components/label':LabelExampleComponent,
  'components/modal':ModalExampleComponent,
  'components/multiselect-dropdown':MultiselectDropdownExampleComponent,
  'components/pagination':PaginationExampleComponent,
  'components/point-of-contact':POCExampleComponent,
  'components/search-header':SearchHeaderExampleComponent,
  'directives/click-outside':ClickOutsideExampleComponent,
  'directives/sticky':StickyExampleComponent,
  'elements/button':ButtonExampleComponent,
  'form-controls/checkbox':CheckboxExampleComponent,
  'form-controls/date':DateExampleComponent,
  'form-controls/date-time':DateTimeExampleComponent,
  'form-controls/multiselect':MultiSelectExampleComponent,
  'form-controls/radiobutton':RadioExampleComponent,
  'form-controls/searchbar':SearchbarExampleComponent,
  'form-controls/select':SelectExampleComponent,
  'form-controls/text':TextExampleComponent,
  'form-controls/textarea':TextareaExampleComponent,
  'form-controls/time':TimeExampleComponent,
  'form-templates/name-entry':NameEntryExampleComponent,
  'form-templates/phone-entry':PhoneEntryExampleComponent,
};
export const ROUTES: Routes = [
  //{ path: 'form-templates/phone-entry',      component: PhoneEntryExampleComponent }
];
export const routing = RouterModule.forChild(ROUTES);
//add dynamic routes based on structure from sam-ui-elements set in webpack config
for(var idx in DOCS){
  var obj = {};
  obj['path'] = DOCS[idx]['link'];
  if(!map[DOCS[idx]['link']]){
    obj['component'] = map['doc-placeholder'];
  } else {
    obj['component'] = map[DOCS[idx]['link']];
  }
	ROUTES.push(obj);
}
//console.log(ROUTES);