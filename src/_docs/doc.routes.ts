import { Routes, RouterModule } from '@angular/router';
import { AccordionExampleComponent } from "./accordion/component-example";
import { AlertExampleComponent } from "./alerts/component-example";
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


//console.log(DOCS);

export const ROUTES: Routes = [
  { path: 'accordion',      component: AccordionExampleComponent },
  { path: 'alerts',      component: AlertExampleComponent },
  { path: 'form-controls/button',      component: ButtonExampleComponent },
  { path: 'form-controls/checkbox',      component: CheckboxExampleComponent },
  { path: 'form-controls/date',      component: DateExampleComponent },
  { path: 'form-controls/date-time',      component: DateTimeExampleComponent },
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