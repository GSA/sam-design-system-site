
/******************************************************/
/* File generated in ../config/helpers.js             */
/******************************************************/
import { Routes, RouterModule } from '@angular/router';

import { PlaceHolderExampleComponent } from "./placeholder.component";
import { SimpleExampleComponent } from "./simple.component";

import { AccordionExampleComponent } from "./components/accordion/component-example";
import { SamActionButtonExampleComponent } from "./components/actions/action-button/component-example";
import { SamActionsDropdownComponentExampleComponent } from "./components/actions/actions-dropdown/component-example";
import { AlertExampleComponent } from "./components/alert/component-example";
import { AlphabetSelectorExampleComponent } from "./components/alphabet-selector/component-example";
import { BannerExampleComponent } from "./components/banner/component-example";
import { BreadcrumbExampleComponent } from "./components/breadcrumb/component-example";
import { SamBreadcrumbsComponentExampleComponent } from "./components/breadcrumbs/component-example";
import { CollapsibleExampleComponent } from "./components/collapsible/component-example";
import { SamCommentComponentExampleComponent } from "./components/comments/comment/component-example";
import { SamCommentsComponentExampleComponent } from "./components/comments/component-example";
import { DownloadExampleComponent } from "./components/download/component-example";
import { FiltersContainerExampleComponent } from "./components/filters-container/component-example";
import { HeaderExampleComponent } from "./components/header/component-example";
import { HistoryExampleComponent } from "./components/history/component-example";
import { SamImageComponentExampleComponent } from "./components/image/component-example";
import { InfoAccordionExampleComponent } from "./components/info-accordion/component-example";
import { LabelExampleComponent } from "./components/label/component-example";
import { ModalExampleComponent } from "./components/modal/component-example";
import { MultiselectDropdownExampleComponent } from "./components/multiselect-dropdown/component-example";
import { PaginationExampleComponent } from "./components/pagination/component-example";
import { POCExampleComponent } from "./components/point-of-contact/component-example";
import { SidenavExampleComponent } from "./components/sidenav/component-example";
import { SamMenuItemComponentExampleComponent } from "./components/sidenav/menu-item/component-example";
import { SamSidenavModuleExampleComponent } from "./components/sidenav/sidenav/component-example";
import { SpinnerExampleComponent } from "./components/spinner/component-example";
import { TabsExampleComponent } from "./components/tabs/component-example";
import { ClickOutsideExampleComponent } from "./directives/click-outside/component-example";
import { SamFocusDirectiveExampleComponent } from "./directives/focus/component-example";
import { StickyExampleComponent } from "./directives/sticky/component-example";
import { TabOutsideExampleComponent } from "./directives/tab-outside/component-example";
import { ButtonExampleComponent } from "./elements/button/component-example";
import { AutocompleteExampleComponent } from "./form-controls/autocomplete/component-example";
import { SamAutocompleteDropdownComponentExampleComponent } from "./form-controls/autocomplete-dropdown/component-example";
import { AutocompleteMultiselectExampleComponent } from "./form-controls/autocomplete-multiselect/component-example";
import { CheckboxExampleComponent } from "./form-controls/checkbox/component-example";
import { DateExampleComponent } from "./form-controls/date/component-example";
import { SamDateRangeComponentExampleComponent } from "./form-controls/date-range/component-example";
import { DateTimeExampleComponent } from "./form-controls/date-time/component-example";
import { NumberExampleComponent } from "./form-controls/number/component-example";
import { RadioExampleComponent } from "./form-controls/radiobutton/component-example";
import { SelectExampleComponent } from "./form-controls/select/component-example";
import { SamSelectResizableComponentExampleComponent } from "./form-controls/select-resizable/component-example";
import { TextExampleComponent } from "./form-controls/text/component-example";
import { TextareaExampleComponent } from "./form-controls/textarea/component-example";
import { TimeExampleComponent } from "./form-controls/time/component-example";
import { ToggleSwitchExampleComponent } from "./form-controls/toggle-switch/component-example";
import { NameEntryExampleComponent } from "./form-templates/name-entry/component-example";
import { PhoneEntryExampleComponent } from "./form-templates/phone-entry/component-example";
import { DateTimePipeExampleComponent } from "./pipes/date-time-display/component-example";
import { TimeAgoPipeExampleComponent } from "./pipes/time-ago/component-example";
import { CountryServiceDirectiveExampleComponent } from "./service-directives/autocomplete/country/component-example";
import { StateServiceDirectiveExampleComponent } from "./service-directives/autocomplete/state/component-example";
import { FieldsetWrapperExampleComponent } from "./wrappers/fieldset-wrapper/component-example";
import { LabelWrapperExampleComponent } from "./wrappers/label-wrapper/component-example";


export const ROUTES: Routes = [
	
	{ path: 'components/accordion', component: AccordionExampleComponent },
	{ path: 'components/actions/action-button', component: SamActionButtonExampleComponent },
	{ path: 'components/actions/actions-dropdown', component: SamActionsDropdownComponentExampleComponent },
	{ path: 'components/alert', component: AlertExampleComponent },
	{ path: 'components/alphabet-selector', component: AlphabetSelectorExampleComponent },
	{ path: 'components/banner', component: BannerExampleComponent },
	{ path: 'components/breadcrumb', component: BreadcrumbExampleComponent },
	{ path: 'components/breadcrumbs', component: SamBreadcrumbsComponentExampleComponent },
	{ path: 'components/collapsible', component: CollapsibleExampleComponent },
	{ path: 'components/comments/comment', component: SamCommentComponentExampleComponent },
	{ path: 'components/comments', component: SamCommentsComponentExampleComponent },
	{ path: 'components/download', component: DownloadExampleComponent },
	{ path: 'components/filters-container', component: FiltersContainerExampleComponent },
	{ path: 'components/header', component: HeaderExampleComponent },
	{ path: 'components/history', component: HistoryExampleComponent },
	{ path: 'components/image', component: SamImageComponentExampleComponent },
	{ path: 'components/info-accordion', component: InfoAccordionExampleComponent },
	{ path: 'components/label', component: LabelExampleComponent },
	{ path: 'components/modal', component: ModalExampleComponent },
	{ path: 'components/multiselect-dropdown', component: MultiselectDropdownExampleComponent },
	{ path: 'components/pagination', component: PaginationExampleComponent },
	{ path: 'components/point-of-contact', component: POCExampleComponent },
	{ path: 'components/sidenav', component: SidenavExampleComponent },
	{ path: 'components/sidenav/menu-item', component: SamMenuItemComponentExampleComponent },
	{ path: 'components/sidenav/sidenav', component: SamSidenavModuleExampleComponent },
	{ path: 'components/spinner', component: SpinnerExampleComponent },
	{ path: 'components/tabs', component: TabsExampleComponent },
	{ path: 'directives/click-outside', component: ClickOutsideExampleComponent },
	{ path: 'directives/focus', component: SamFocusDirectiveExampleComponent },
	{ path: 'directives/sticky', component: StickyExampleComponent },
	{ path: 'directives/tab-outside', component: TabOutsideExampleComponent },
	{ path: 'elements/button', component: ButtonExampleComponent },
	{ path: 'form-controls/autocomplete', component: AutocompleteExampleComponent },
	{ path: 'form-controls/autocomplete-dropdown', component: SamAutocompleteDropdownComponentExampleComponent },
	{ path: 'form-controls/autocomplete-multiselect', component: AutocompleteMultiselectExampleComponent },
	{ path: 'form-controls/checkbox', component: CheckboxExampleComponent },
	{ path: 'form-controls/date', component: DateExampleComponent },
	{ path: 'form-controls/date-range', component: SamDateRangeComponentExampleComponent },
	{ path: 'form-controls/date-time', component: DateTimeExampleComponent },
	{ path: 'form-controls/number', component: NumberExampleComponent },
	{ path: 'form-controls/radiobutton', component: RadioExampleComponent },
	{ path: 'form-controls/select', component: SelectExampleComponent },
	{ path: 'form-controls/select-resizable', component: SamSelectResizableComponentExampleComponent },
	{ path: 'form-controls/text', component: TextExampleComponent },
	{ path: 'form-controls/textarea', component: TextareaExampleComponent },
	{ path: 'form-controls/time', component: TimeExampleComponent },
	{ path: 'form-controls/toggle-switch', component: ToggleSwitchExampleComponent },
	{ path: 'form-templates/name-entry', component: NameEntryExampleComponent },
	{ path: 'form-templates/phone-entry', component: PhoneEntryExampleComponent },
	{ path: 'pipes/date-time-display', component: DateTimePipeExampleComponent },
	{ path: 'pipes/time-ago', component: TimeAgoPipeExampleComponent },
	{ path: 'service-directives/autocomplete/country', component: CountryServiceDirectiveExampleComponent },
	{ path: 'service-directives/autocomplete/state', component: StateServiceDirectiveExampleComponent },
	{ path: 'wrappers/fieldset-wrapper', component: FieldsetWrapperExampleComponent },
	{ path: 'wrappers/label-wrapper', component: LabelWrapperExampleComponent },
];
export const routing = RouterModule.forChild(ROUTES);

