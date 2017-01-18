import { Routes, RouterModule } from '@angular/router';

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


//console.log(DOCS);

export const ROUTES: Routes = [
  { path: 'components/accordion',      component: AccordionExampleComponent },
  { path: 'components/alerts',      component: AlertExampleComponent },
  { path: 'components/banner',      component: BannerExampleComponent },
  { path: 'components/footer',      component: FooterExampleComponent },
  { path: 'components/header',      component: HeaderExampleComponent },
  { path: 'components/label',      component: LabelExampleComponent },
  { path: 'components/modal',      component: ModalExampleComponent },
  { path: 'components/multiselect-dropdown',      component: MultiselectDropdownExampleComponent },
  { path: 'components/pagination',      component: PaginationExampleComponent },
  { path: 'components/point-of-contact',      component: POCExampleComponent },
  { path: 'components/search-header',      component: SearchHeaderExampleComponent },
  { path: 'components/tabs',      component: TabsExampleComponent },
  { path: 'directives/click-outside',      component: ClickOutsideExampleComponent },
  { path: 'directives/sticky',      component: StickyExampleComponent },
  { path: 'elements/button',      component: ButtonExampleComponent },
  { path: 'form-controls/checkbox',      component: CheckboxExampleComponent },
  { path: 'form-controls/date',      component: DateExampleComponent },
  { path: 'form-controls/date-time',      component: DateTimeExampleComponent },
  { path: 'form-controls/multiselect',      component: MultiSelectExampleComponent },
  { path: 'form-controls/radiobutton',      component: RadioExampleComponent },
  { path: 'form-controls/searchbar',      component: SearchbarExampleComponent },
  { path: 'form-controls/select',      component: SelectExampleComponent },
  { path: 'form-controls/text',      component: TextExampleComponent },
  { path: 'form-controls/textarea',      component: TextareaExampleComponent },
  { path: 'form-controls/time',      component: TimeExampleComponent },
  { path: 'form-templates/name-entry',      component: NameEntryExampleComponent },
  { path: 'form-templates/phone-entry',      component: PhoneEntryExampleComponent },
];
export const routing = RouterModule.forChild(ROUTES);
//add dynamic routes based on structure from src/_docs
/*for(var idx in DOCS){
	ROUTES.push({
		path: DOCS[idx],
		component: HomeComponent,
		data: {
			directory: DOCS[idx], 
		}
	});
}*/