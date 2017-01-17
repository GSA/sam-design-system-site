import { Routes, RouterModule } from '@angular/router';
import { AccordionExampleComponent } from "./accordion/component-example";
import { AlertExampleComponent } from "./alerts/component-example";
import { ButtonExampleComponent } from "./form-controls/button/component-example";
import { CheckboxExampleComponent } from "./form-controls/checkbox/component-example";
import { DateExampleComponent } from "./form-controls/date/component-example";
import { DateTimeExampleComponent } from "./form-controls/datetime/component-example";
import { MultiSelectExampleComponent } from "./form-controls/multiselect/component-example";
import { NameEntryExampleComponent } from "./form-controls/name-entry/component-example";
import { PhoneEntryExampleComponent } from "./form-controls/phone-entry/component-example";
import { RadioExampleComponent } from "./form-controls/radiobutton/component-example";
import { SearchbarExampleComponent } from "./form-controls/searchbar/component-example";
import { SelectExampleComponent } from "./form-controls/select/component-example";
import { TextExampleComponent } from "./form-controls/text/component-example";
import { TextareaExampleComponent } from "./form-controls/textarea/component-example";
import { TimeExampleComponent } from "./form-controls/time/component-example";
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


//console.log(DOCS);

export const ROUTES: Routes = [
  { path: 'accordion',      component: AccordionExampleComponent },
  { path: 'alerts',      component: AlertExampleComponent },
  { path: 'form-controls/button',      component: ButtonExampleComponent },
  { path: 'form-controls/checkbox',      component: CheckboxExampleComponent },
  { path: 'form-controls/date',      component: DateExampleComponent },
  { path: 'form-controls/date-time',      component: DateTimeExampleComponent },
  { path: 'form-controls/multiselect',      component: MultiSelectExampleComponent },
  { path: 'form-controls/name-entry',      component: NameEntryExampleComponent },
  { path: 'form-controls/phone-entry',      component: PhoneEntryExampleComponent },
  { path: 'form-controls/radiobutton',      component: RadioExampleComponent },
  { path: 'form-controls/searchbar',      component: SearchbarExampleComponent },
  { path: 'form-controls/select',      component: SelectExampleComponent },
  { path: 'form-controls/text',      component: TextExampleComponent },
  { path: 'form-controls/textarea',      component: TextareaExampleComponent },
  { path: 'form-controls/time',      component: TimeExampleComponent },
  { path: 'footer',      component: FooterExampleComponent },
  { path: 'header',      component: HeaderExampleComponent },
  { path: 'header-links',      component: HeaderLinksExampleComponent },
  { path: 'label',      component: LabelExampleComponent },
  { path: 'modal',      component: ModalExampleComponent },
  { path: 'multiselect-dropdown',      component: MultiselectDropdownExampleComponent },
  { path: 'pagination',      component: PaginationExampleComponent },
  { path: 'point-of-contact',      component: POCExampleComponent },
  { path: 'search-header',      component: SearchHeaderExampleComponent },
  { path: 'sticky',      component: StickyExampleComponent },
  { path: 'tabs',      component: TabsExampleComponent },
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