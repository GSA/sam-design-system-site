
/* tslint:disable */
/******************************************************/
/* File generated in ../config/helpers.js             */
/******************************************************/
import { Routes, RouterModule } from '@angular/router';
import { BaseDocPageComponent } from './base-doc-page.component';

import { AccordionExampleComponent } from './components/accordion/component-example';
import { SamActionButtonExampleComponent } from './components/actions/action-button/component-example';
import { SamActionsDropdownComponentExampleComponent } from './components/actions/actions-dropdown/component-example';
import { SamAlertComponentExampleComponent } from './components/alert/component-example';
import { SamAlertFooterComponentExampleComponent } from './components/alert-footer/component-example';
import { SamBadgeComponentExampleComponent } from './components/badge/component-example';
import { SamBreadcrumbsComponentExampleComponent } from './components/breadcrumbs/component-example';
import { SamCommentsComponentExampleComponent } from './components/comments/component-example';
import { SamDataTableComponentExampleComponent } from './components/data-table/component-example';
import { DownloadExampleComponent } from './components/download/component-example';
import { HistoryExampleComponent } from './components/history/component-example';
import { SamImageComponentExampleComponent } from './components/image/component-example';
import { ModalExampleComponent } from './components/modal/component-example';
import { MultiselectDropdownExampleComponent } from './components/multiselect-dropdown/component-example';
import { SamPageTitleExampleComponent } from './components/page-title/component-example';
import { PaginationExampleComponent } from './components/pagination/component-example';
import { POCExampleComponent } from './components/point-of-contact/component-example';
import { SamProgressExampleComponent } from './components/progress-bar/component-example';
import { SidenavExampleComponent } from './components/sidenav/component-example';
import { SpinnerExampleComponent } from './components/spinner/component-example';
import { TabsExampleComponent } from './components/tabs/component-example';
import { ClickOutsideExampleComponent } from './directives/click-outside/component-example';
import { SamDragDropDirectiveExampleComponent } from './directives/drag-drop/component-example';
import { SamExternalLinkDirectiveExampleComponent } from './directives/external-link/component-example';
import { SamFocusDirectiveExampleComponent } from './directives/focus/component-example';
import { StickyExampleComponent } from './directives/sticky/component-example';
import { TabOutsideExampleComponent } from './directives/tab-outside/component-example';
import { ButtonExampleComponent } from './elements/button/component-example';
import { SamActionsListComponentExampleComponent } from './experimental/actions-list/component-example';
import { SamBoxComponentExampleComponent } from './experimental/box/component-example';
import { ButtonNextExampleComponent } from './experimental/button-next/component-example';
import { SamContainerComponentExampleComponent } from './experimental/container/component-example';
import { SamDollarComponentExampleComponent } from './experimental/dollar/component-example';
import { SamFilterDrawerComponentExampleComponent } from './experimental/filter-drawer/component-example';
import { SamHeadingComponentExampleComponent } from './experimental/heading/component-example';
import { SamIconComponentExampleComponent } from './experimental/icon/component-example';
import { SamInputMaskComponentExampleComponent } from './experimental/input-mask/component-example';
import { SamLabelNextComponentExampleComponent } from './experimental/label/component-example';
import { SamListComponentExampleComponent } from './experimental/list/component-example';
import { SamMasterPageComponentExampleComponent } from './experimental/master-page/component-example';
import { SamPageComponentExampleComponent } from './experimental/page/component-example';
import { SamSearchComponentExampleComponent } from './experimental/search/component-example';
import { SamSidebarComponentExampleComponent } from './experimental/sidebar/component-example';
import { SamTabsNextComponentExampleComponent } from './experimental/tabs/component-example';
import { SamTitleComponentExampleComponent } from './experimental/title/component-example';
import { SamVideoPlayerComponentExampleComponent } from './experimental/video-player/component-example';
import { SamYoutubeComponentExampleComponent } from './experimental/youtube/component-example';
import { AutocompleteExampleComponent } from './form-controls/autocomplete/component-example';
import { AutocompleteMultiselectExampleComponent } from './form-controls/autocomplete-multiselect/component-example';
import { CheckboxExampleComponent } from './form-controls/checkbox/component-example';
import { DateExampleComponent } from './form-controls/date/component-example';
import { SamDateRangeComponentExampleComponent } from './form-controls/date-range/component-example';
import { DateTimeExampleComponent } from './form-controls/date-time/component-example';
import { NumberExampleComponent } from './form-controls/number/component-example';
import { RadioExampleComponent } from './form-controls/radiobutton/component-example';
import { SelectExampleComponent } from './form-controls/select/component-example';
import { TextExampleComponent } from './form-controls/text/component-example';
import { TextareaExampleComponent } from './form-controls/textarea/component-example';
import { TimeExampleComponent } from './form-controls/time/component-example';
import { ToggleSwitchExampleComponent } from './form-controls/toggle-switch/component-example';
import { SamUploadComponentExampleComponent } from './form-controls/upload/component-example';
import { PhoneGroupExampleComponent } from './form-templates/international-phone/component-example';
import { NameEntryExampleComponent } from './form-templates/name-entry/component-example';
import { PhoneEntryExampleComponent } from './form-templates/phone-entry/component-example';
import { FieldsetWrapperExampleComponent } from './wrappers/fieldset-wrapper/component-example';
import { LabelWrapperExampleComponent } from './wrappers/label-wrapper/component-example';


import { StaticPageComponent } from './static.component';

export const ROUTES: Routes = [

  { path: 'components/accordion', component: BaseDocPageComponent, data: { path: '_docs/components/accordion', componentName: 'Accordion'}, children: [
						{ path: '', component: AccordionExampleComponent }
				]},
  { path: 'components/actions/action-button', component: BaseDocPageComponent, data: { path: '_docs/components/actions/action-button', componentName: 'SamActionButton'}, children: [
						{ path: '', component: SamActionButtonExampleComponent }
				]},
  { path: 'components/actions/actions-dropdown', component: BaseDocPageComponent, data: { path: '_docs/components/actions/actions-dropdown', componentName: 'SamActionsDropdownComponent'}, children: [
						{ path: '', component: SamActionsDropdownComponentExampleComponent }
				]},
  { path: 'components/alert', component: BaseDocPageComponent, data: { path: '_docs/components/alert', componentName: 'SamAlertComponent'}, children: [
						{ path: '', component: SamAlertComponentExampleComponent }
				]},
  { path: 'components/alert-footer', component: BaseDocPageComponent, data: { path: '_docs/components/alert-footer', componentName: 'SamAlertFooterComponent'}, children: [
						{ path: '', component: SamAlertFooterComponentExampleComponent }
				]},
  { path: 'components/badge', component: SamBadgeComponentExampleComponent },
  { path: 'components/breadcrumbs', component: BaseDocPageComponent, data: { path: '_docs/components/breadcrumbs', componentName: 'SamBreadcrumbsComponent'}, children: [
						{ path: '', component: SamBreadcrumbsComponentExampleComponent }
				]},
  { path: 'components/comments', component: SamCommentsComponentExampleComponent },
  { path: 'components/data-table', component: SamDataTableComponentExampleComponent },
  { path: 'components/download', component: DownloadExampleComponent },
  { path: 'components/history', component: HistoryExampleComponent },
  { path: 'components/image', component: SamImageComponentExampleComponent },
  { path: 'components/modal', component: ModalExampleComponent },
  { path: 'components/multiselect-dropdown', component: MultiselectDropdownExampleComponent },
  { path: 'components/page-title', component: SamPageTitleExampleComponent },
  { path: 'components/pagination', component: PaginationExampleComponent },
  { path: 'components/point-of-contact', component: POCExampleComponent },
  { path: 'components/progress-bar', component: SamProgressExampleComponent },
  { path: 'components/sidenav', component: SidenavExampleComponent },
  { path: 'components/spinner', component: SpinnerExampleComponent },
  { path: 'components/tabs', component: TabsExampleComponent },
  { path: 'directives/click-outside', component: ClickOutsideExampleComponent },
  { path: 'directives/drag-drop', component: SamDragDropDirectiveExampleComponent },
  { path: 'directives/external-link', component: SamExternalLinkDirectiveExampleComponent },
  { path: 'directives/focus', component: SamFocusDirectiveExampleComponent },
  { path: 'directives/sticky', component: StickyExampleComponent },
  { path: 'directives/tab-outside', component: TabOutsideExampleComponent },
  { path: 'elements/button', component: ButtonExampleComponent },
  { path: 'experimental/actions-list', component: SamActionsListComponentExampleComponent },
  { path: 'experimental/box', component: SamBoxComponentExampleComponent },
  { path: 'experimental/button-next', component: ButtonNextExampleComponent },
  { path: 'experimental/container', component: SamContainerComponentExampleComponent },
  { path: 'experimental/dollar', component: SamDollarComponentExampleComponent },
  { path: 'experimental/filter-drawer', component: SamFilterDrawerComponentExampleComponent },
  { path: 'experimental/heading', component: SamHeadingComponentExampleComponent },
  { path: 'experimental/icon', component: SamIconComponentExampleComponent },
  { path: 'experimental/input-mask', component: SamInputMaskComponentExampleComponent },
  { path: 'experimental/label', component: SamLabelNextComponentExampleComponent },
  { path: 'experimental/list', component: SamListComponentExampleComponent },
  { path: 'experimental/master-page', component: SamMasterPageComponentExampleComponent },
  { path: 'experimental/page', component: SamPageComponentExampleComponent },
  { path: 'experimental/search', component: SamSearchComponentExampleComponent },
  { path: 'experimental/sidebar', component: SamSidebarComponentExampleComponent },
  { path: 'experimental/tabs', component: SamTabsNextComponentExampleComponent },
  { path: 'experimental/title', component: SamTitleComponentExampleComponent },
  { path: 'experimental/video-player', component: SamVideoPlayerComponentExampleComponent },
  { path: 'experimental/youtube', component: SamYoutubeComponentExampleComponent },
  { path: 'form-controls/autocomplete', component: AutocompleteExampleComponent },
  { path: 'form-controls/autocomplete-multiselect', component: AutocompleteMultiselectExampleComponent },
  { path: 'form-controls/checkbox', component: CheckboxExampleComponent },
  { path: 'form-controls/date', component: DateExampleComponent },
  { path: 'form-controls/date-range', component: SamDateRangeComponentExampleComponent },
  { path: 'form-controls/date-time', component: DateTimeExampleComponent },
  { path: 'form-controls/number', component: NumberExampleComponent },
  { path: 'form-controls/radiobutton', component: RadioExampleComponent },
  { path: 'form-controls/select', component: SelectExampleComponent },
  { path: 'form-controls/text', component: TextExampleComponent },
  { path: 'form-controls/textarea', component: TextareaExampleComponent },
  { path: 'form-controls/time', component: TimeExampleComponent },
  { path: 'form-controls/toggle-switch', component: ToggleSwitchExampleComponent },
  { path: 'form-controls/upload', component: SamUploadComponentExampleComponent },
  { path: 'form-templates/international-phone', component: PhoneGroupExampleComponent },
  { path: 'form-templates/name-entry', component: NameEntryExampleComponent },
  { path: 'form-templates/phone-entry', component: PhoneEntryExampleComponent },
  { path: 'wrappers/fieldset-wrapper', component: FieldsetWrapperExampleComponent },
  { path: 'wrappers/label-wrapper', component: LabelWrapperExampleComponent },
  {
    path: 'architecture/form-service',
    component: StaticPageComponent,
    data: { markdownfile: '_static/architecture/Form-Service.md' }
  },
  {
    path: 'architecture/modules-and-lazy-loading',
    component: StaticPageComponent,
    data: { markdownfile: '_static/architecture/Modules-And-Lazy-Loading.md' }
  },
  {
    path: 'architecture/title-service',
    component: StaticPageComponent,
    data: { markdownfile: '_static/architecture/Title-Service.md' }
  },
  {
    path: 'features/release-process',
    component: StaticPageComponent,
    data: { markdownfile: '_static/features/Release-Process.md' }
  },
  {
    path: 'overview/contribute',
    component: StaticPageComponent,
    data: { markdownfile: '_static/overview/Contribute.md' }
  },
  {
    path: 'overview/getting-started',
    component: StaticPageComponent,
    data: { markdownfile: '_static/overview/Getting-Started.md' }
  },
  {
    path: 'overview/innovation-process',
    component: StaticPageComponent,
    data: { markdownfile: '_static/overview/Innovation-Process.md' }
  },
  {
    path: 'patterns/layout',
    component: StaticPageComponent,
    data: { markdownfile: '_static/patterns/layout.md' }
  },
];
export const routing = RouterModule.forChild(ROUTES);

