
/* tslint:disable */
/******************************************************/
/* File generated in ../config/helpers.js             */
/******************************************************/
import { Routes, RouterModule } from '@angular/router';
import { BaseDocPageComponent } from './base-doc-page.component';

import { SamAccordionComponentExampleComponent } from './components/accordion/component-example';
import { SamActionButtonExampleComponent } from './components/actions/action-button/component-example';
import { SamActionsDropdownComponentExampleComponent } from './components/actions/actions-dropdown/component-example';
import { SamAlertComponentExampleComponent } from './components/alert/component-example';
import { SamAlertFooterComponentExampleComponent } from './components/alert-footer/component-example';
import { SamBadgeComponentExampleComponent } from './components/badge/component-example';
import { SamBreadcrumbsComponentExampleComponent } from './components/breadcrumbs/component-example';
import { SamCommentsComponentExampleComponent } from './components/comments/component-example';
import { SamDataTableComponentExampleComponent } from './components/data-table/component-example';
import { DownloadExampleComponent } from './components/download/component-example';
import { SamHistoryComponentExampleComponent } from './components/history/component-example';
import { SamImageComponentExampleComponent } from './components/image/component-example';
import { SamModalComponentExampleComponent } from './components/modal/component-example';
import { MultiselectDropdownExampleComponent } from './components/multiselect-dropdown/component-example';
import { SamPageTitleExampleComponent } from './components/page-title/component-example';
import { SamPaginationComponentExampleComponent } from './components/pagination/component-example';
import { SamPointOfContactComponentExampleComponent } from './components/point-of-contact/component-example';
import { SamProgressExampleComponent } from './components/progress-bar/component-example';
import { SamSidenavComponentExampleComponent } from './components/sidenav/component-example';
import { SamSpinnerComponentExampleComponent } from './components/spinner/component-example';
import { SamTabsComponentExampleComponent } from './components/tabs/component-example';
import { SamClickOutsideDirectiveExampleComponent } from './directives/click-outside/component-example';
import { SamDragDropDirectiveExampleComponent } from './directives/drag-drop/component-example';
import { SamExternalLinkDirectiveExampleComponent } from './directives/external-link/component-example';
import { SamFocusDirectiveExampleComponent } from './directives/focus/component-example';
import { SamStickyComponentExampleComponent } from './directives/sticky/component-example';
import { SamTabOutsideDirectiveExampleComponent } from './directives/tab-outside/component-example';
import { ButtonExampleComponent } from './elements/button/component-example';
import { SamActionsListComponentExampleComponent } from './experimental/actions-list/component-example';
import { SamAlertNextComponentExampleComponent } from './experimental/alert/component-example';
import { SamBoxComponentExampleComponent } from './experimental/box/component-example';
import { ButtonNextExampleComponent } from './experimental/button-next/component-example';
import { SamContainerComponentExampleComponent } from './experimental/container/component-example';
import { SamDollarComponentExampleComponent } from './experimental/dollar/component-example';
import { SamFiltersComponentExampleComponent } from './experimental/filters/component-example';
import { SamHeadingComponentExampleComponent } from './experimental/heading/component-example';
import { SamHierarchicalTreeGridComponentExampleComponent } from './experimental/hierarchical-tree-grid/component-example';
import { SamIconComponentExampleComponent } from './experimental/icon/component-example';
import { SamInputMaskComponentExampleComponent } from './experimental/input-mask/component-example';
import { SamLabelNextComponentExampleComponent } from './experimental/label/component-example';
import { SamListComponentExampleComponent } from './experimental/list/component-example';
import { SamMasterPageComponentExampleComponent } from './experimental/master-page/component-example';
import { SamPageSampleComponentExampleComponent } from './experimental/page/component-example';
import { SamResourcesWrapperComponentExampleComponent } from './experimental/resources-wrapper/component-example';
import { SamSearchComponentExampleComponent } from './experimental/search/component-example';
import { SamSidebarComponentExampleComponent } from './experimental/sidebar/component-example';
import { SamTabsNextComponentExampleComponent } from './experimental/tabs/component-example';
import { SamTitleComponentExampleComponent } from './experimental/title/component-example';
import { SamVideoPlayerComponentExampleComponent } from './experimental/video-player/component-example';
import { SamYoutubeComponentExampleComponent } from './experimental/youtube/component-example';
import { SamAutocompleteComponentExampleComponent } from './form-controls/autocomplete/component-example';
import { SamAutocompleteMultiselectComponentExampleComponent } from './form-controls/autocomplete-multiselect/component-example';
import { SamCheckboxComponentExampleComponent } from './form-controls/checkbox/component-example';
import { SamDateComponentExampleComponent } from './form-controls/date/component-example';
import { SamDateRangeComponentExampleComponent } from './form-controls/date-range/component-example';
import { SamDateTimeComponentExampleComponent } from './form-controls/date-time/component-example';
import { SamNumberComponentExampleComponent } from './form-controls/number/component-example';
import { SamRadioComponentExampleComponent } from './form-controls/radiobutton/component-example';
import { SamSelectComponentExampleComponent } from './form-controls/select/component-example';
import { SamTextComponentExampleComponent } from './form-controls/text/component-example';
import { SamTextareaComponentExampleComponent } from './form-controls/textarea/component-example';
import { SamTimeComponentExampleComponent } from './form-controls/time/component-example';
import { SamToggleSwitchComponentExampleComponent } from './form-controls/toggle-switch/component-example';
import { SamUploadComponentExampleComponent } from './form-controls/upload/component-example';
import { PhoneGroupExampleComponent } from './form-templates/international-phone/component-example';
import { NameEntryExampleComponent } from './form-templates/name-entry/component-example';
import { PhoneEntryExampleComponent } from './form-templates/phone-entry/component-example';
import { SamFilterDrawerComponentExampleComponent } from './layout/filter-drawer/component-example';
import { SamFiltersWrapperComponentExampleComponent } from './layout/filters-wrapper/component-example';
import { SamPageComponentExampleComponent } from './layout/page/component-example';
import { SamPaginationNextComponentExampleComponent } from './layout/pagination/component-example';
import { SamToolbarComponentExampleComponent } from './layout/toolbar/component-example';
import { FieldsetWrapperExampleComponent } from './wrappers/fieldset-wrapper/component-example';
import { LabelWrapperExampleComponent } from './wrappers/label-wrapper/component-example';


import { StaticPageComponent } from './static.component';

export const ROUTES: Routes = [

  { path: 'components/accordion', component: BaseDocPageComponent, data: {
    path: '_docs/components/accordion',
    componentName: 'SamAccordionComponent',
			sections: ['component-example.html','component-example.ts','design.md','documentation.md','guidance.md']}, children: [
    { path: '', component: SamAccordionComponentExampleComponent }
  ]},
  { path: 'components/actions/action-button', component: BaseDocPageComponent, data: {
    path: '_docs/components/actions/action-button',
    componentName: 'SamActionButton',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamActionButtonExampleComponent }
  ]},
  { path: 'components/actions/actions-dropdown', component: BaseDocPageComponent, data: {
    path: '_docs/components/actions/actions-dropdown',
    componentName: 'SamActionsDropdownComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamActionsDropdownComponentExampleComponent }
  ]},
  { path: 'components/alert', component: BaseDocPageComponent, data: {
    path: '_docs/components/alert',
    componentName: 'SamAlertComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamAlertComponentExampleComponent }
  ]},
  { path: 'components/alert-footer', component: BaseDocPageComponent, data: {
    path: '_docs/components/alert-footer',
    componentName: 'SamAlertFooterComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamAlertFooterComponentExampleComponent }
  ]},
  { path: 'components/badge', component: BaseDocPageComponent, data: {
    path: '_docs/components/badge',
    componentName: 'SamBadgeComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamBadgeComponentExampleComponent }
  ]},
  { path: 'components/breadcrumbs', component: BaseDocPageComponent, data: {
    path: '_docs/components/breadcrumbs',
    componentName: 'SamBreadcrumbsComponent',
			sections: ['component-example.html','component-example.ts','design.md','documentation.md']}, children: [
    { path: '', component: SamBreadcrumbsComponentExampleComponent }
  ]},
  { path: 'components/comments', component: BaseDocPageComponent, data: {
    path: '_docs/components/comments',
    componentName: 'SamCommentsComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamCommentsComponentExampleComponent }
  ]},
  { path: 'components/data-table', component: BaseDocPageComponent, data: {
    path: '_docs/components/data-table',
    componentName: 'SamDataTableComponent',
			sections: ['component-example.html','component-example.ts','data-source.ts','data.ts','documentation.md','guidance.md']}, children: [
    { path: '', component: SamDataTableComponentExampleComponent }
  ]},
  { path: 'components/download', component: DownloadExampleComponent },
  { path: 'components/history', component: BaseDocPageComponent, data: {
    path: '_docs/components/history',
    componentName: 'SamHistoryComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamHistoryComponentExampleComponent }
  ]},
  { path: 'components/image', component: BaseDocPageComponent, data: {
    path: '_docs/components/image',
    componentName: 'SamImageComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamImageComponentExampleComponent }
  ]},
  { path: 'components/modal', component: BaseDocPageComponent, data: {
    path: '_docs/components/modal',
    componentName: 'SamModalComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamModalComponentExampleComponent }
  ]},
  { path: 'components/multiselect-dropdown', component: MultiselectDropdownExampleComponent },
  { path: 'components/page-title', component: SamPageTitleExampleComponent },
  { path: 'components/pagination', component: BaseDocPageComponent, data: {
    path: '_docs/components/pagination',
    componentName: 'SamPaginationComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamPaginationComponentExampleComponent }
  ]},
  { path: 'components/point-of-contact', component: BaseDocPageComponent, data: {
    path: '_docs/components/point-of-contact',
    componentName: 'SamPointOfContactComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamPointOfContactComponentExampleComponent }
  ]},
  { path: 'components/progress-bar', component: BaseDocPageComponent, data: {
    path: '_docs/components/progress-bar',
    componentName: 'SamProgress',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamProgressExampleComponent }
  ]},
  { path: 'components/sidenav', component: BaseDocPageComponent, data: {
    path: '_docs/components/sidenav',
    componentName: 'SamSidenavComponent',
			sections: ['component-example.html','component-example.ts','design.md','documentation.md','guidance.md']}, children: [
    { path: '', component: SamSidenavComponentExampleComponent }
  ]},
  { path: 'components/spinner', component: BaseDocPageComponent, data: {
    path: '_docs/components/spinner',
    componentName: 'SamSpinnerComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamSpinnerComponentExampleComponent }
  ]},
  { path: 'components/tabs', component: BaseDocPageComponent, data: {
    path: '_docs/components/tabs',
    componentName: 'SamTabsComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamTabsComponentExampleComponent }
  ]},
  { path: 'directives/click-outside', component: BaseDocPageComponent, data: {
    path: '_docs/directives/click-outside',
    componentName: 'SamClickOutsideDirective',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamClickOutsideDirectiveExampleComponent }
  ]},
  { path: 'directives/drag-drop', component: BaseDocPageComponent, data: {
    path: '_docs/directives/drag-drop',
    componentName: 'SamDragDropDirective',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamDragDropDirectiveExampleComponent }
  ]},
  { path: 'directives/external-link', component: BaseDocPageComponent, data: {
    path: '_docs/directives/external-link',
    componentName: 'SamExternalLinkDirective',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamExternalLinkDirectiveExampleComponent }
  ]},
  { path: 'directives/focus', component: BaseDocPageComponent, data: {
    path: '_docs/directives/focus',
    componentName: 'SamFocusDirective',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamFocusDirectiveExampleComponent }
  ]},
  { path: 'directives/sticky', component: BaseDocPageComponent, data: {
    path: '_docs/directives/sticky',
    componentName: 'SamStickyComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamStickyComponentExampleComponent }
  ]},
  { path: 'directives/tab-outside', component: BaseDocPageComponent, data: {
    path: '_docs/directives/tab-outside',
    componentName: 'SamTabOutsideDirective',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamTabOutsideDirectiveExampleComponent }
  ]},
  { path: 'elements/button', component: ButtonExampleComponent },
  { path: 'experimental/actions-list', component: BaseDocPageComponent, data: {
    path: '_docs/experimental/actions-list',
    componentName: 'SamActionsListComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamActionsListComponentExampleComponent }
  ]},
  { path: 'experimental/alert', component: BaseDocPageComponent, data: {
    path: '_docs/experimental/alert',
    componentName: 'SamAlertNextComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamAlertNextComponentExampleComponent }
  ]},
  { path: 'experimental/box', component: SamBoxComponentExampleComponent },
  { path: 'experimental/button-next', component: ButtonNextExampleComponent },
  { path: 'experimental/container', component: SamContainerComponentExampleComponent },
  { path: 'experimental/dollar', component: BaseDocPageComponent, data: {
    path: '_docs/experimental/dollar',
    componentName: 'SamDollarComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamDollarComponentExampleComponent }
  ]},
  { path: 'experimental/filters', component: BaseDocPageComponent, data: {
    path: '_docs/experimental/filters',
    componentName: 'SamFiltersComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamFiltersComponentExampleComponent }
  ]},
  { path: 'experimental/heading', component: SamHeadingComponentExampleComponent },
  { path: 'experimental/hierarchical-tree-grid', component: BaseDocPageComponent, data: {
    path: '_docs/experimental/hierarchical-tree-grid',
    componentName: 'SamHierarchicalTreeGridComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamHierarchicalTreeGridComponentExampleComponent }
  ]},
  { path: 'experimental/icon', component: BaseDocPageComponent, data: {
    path: '_docs/experimental/icon',
    componentName: 'SamIconComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamIconComponentExampleComponent }
  ]},
  { path: 'experimental/input-mask', component: BaseDocPageComponent, data: {
    path: '_docs/experimental/input-mask',
    componentName: 'SamInputMaskComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamInputMaskComponentExampleComponent }
  ]},
  { path: 'experimental/label', component: SamLabelNextComponentExampleComponent },
  { path: 'experimental/list', component: SamListComponentExampleComponent },
  { path: 'experimental/master-page', component: SamMasterPageComponentExampleComponent },
  { path: 'experimental/page', component: SamPageSampleComponentExampleComponent },
  { path: 'experimental/resources-wrapper', component: BaseDocPageComponent, data: {
    path: '_docs/experimental/resources-wrapper',
    componentName: 'SamResourcesWrapperComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamResourcesWrapperComponentExampleComponent }
  ]},
  { path: 'experimental/search', component: SamSearchComponentExampleComponent },
  { path: 'experimental/sidebar', component: SamSidebarComponentExampleComponent },
  { path: 'experimental/tabs', component: BaseDocPageComponent, data: {
    path: '_docs/experimental/tabs',
    componentName: 'SamTabsNextComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamTabsNextComponentExampleComponent }
  ]},
  { path: 'experimental/title', component: SamTitleComponentExampleComponent },
  { path: 'experimental/video-player', component: SamVideoPlayerComponentExampleComponent },
  { path: 'experimental/youtube', component: SamYoutubeComponentExampleComponent },
  { path: 'form-controls/autocomplete', component: BaseDocPageComponent, data: {
    path: '_docs/form-controls/autocomplete',
    componentName: 'SamAutocompleteComponent',
			sections: ['component-example.html','component-example.ts','design.md','documentation.md','guidance.md','implementation.md']}, children: [
    { path: '', component: SamAutocompleteComponentExampleComponent }
  ]},
  { path: 'form-controls/autocomplete-multiselect', component: BaseDocPageComponent, data: {
    path: '_docs/form-controls/autocomplete-multiselect',
    componentName: 'SamAutocompleteMultiselectComponent',
			sections: ['component-example.html','component-example.ts','design.md','documentation.md','guidance.md','implementation.md']}, children: [
    { path: '', component: SamAutocompleteMultiselectComponentExampleComponent }
  ]},
  { path: 'form-controls/checkbox', component: BaseDocPageComponent, data: {
    path: '_docs/form-controls/checkbox',
    componentName: 'SamCheckboxComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamCheckboxComponentExampleComponent }
  ]},
  { path: 'form-controls/date', component: BaseDocPageComponent, data: {
    path: '_docs/form-controls/date',
    componentName: 'SamDateComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamDateComponentExampleComponent }
  ]},
  { path: 'form-controls/date-range', component: BaseDocPageComponent, data: {
    path: '_docs/form-controls/date-range',
    componentName: 'SamDateRangeComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamDateRangeComponentExampleComponent }
  ]},
  { path: 'form-controls/date-time', component: BaseDocPageComponent, data: {
    path: '_docs/form-controls/date-time',
    componentName: 'SamDateTimeComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamDateTimeComponentExampleComponent }
  ]},
  { path: 'form-controls/number', component: BaseDocPageComponent, data: {
    path: '_docs/form-controls/number',
    componentName: 'SamNumberComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamNumberComponentExampleComponent }
  ]},
  { path: 'form-controls/radiobutton', component: BaseDocPageComponent, data: {
    path: '_docs/form-controls/radiobutton',
    componentName: 'SamRadioComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamRadioComponentExampleComponent }
  ]},
  { path: 'form-controls/select', component: BaseDocPageComponent, data: {
    path: '_docs/form-controls/select',
    componentName: 'SamSelectComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamSelectComponentExampleComponent }
  ]},
  { path: 'form-controls/text', component: BaseDocPageComponent, data: {
    path: '_docs/form-controls/text',
    componentName: 'SamTextComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamTextComponentExampleComponent }
  ]},
  { path: 'form-controls/textarea', component: BaseDocPageComponent, data: {
    path: '_docs/form-controls/textarea',
    componentName: 'SamTextareaComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamTextareaComponentExampleComponent }
  ]},
  { path: 'form-controls/time', component: BaseDocPageComponent, data: {
    path: '_docs/form-controls/time',
    componentName: 'SamTimeComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamTimeComponentExampleComponent }
  ]},
  { path: 'form-controls/toggle-switch', component: BaseDocPageComponent, data: {
    path: '_docs/form-controls/toggle-switch',
    componentName: 'SamToggleSwitchComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamToggleSwitchComponentExampleComponent }
  ]},
  { path: 'form-controls/upload', component: SamUploadComponentExampleComponent },
  { path: 'form-templates/international-phone', component: BaseDocPageComponent, data: {
    path: '_docs/form-templates/international-phone',
    componentName: 'PhoneGroup',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: PhoneGroupExampleComponent }
  ]},
  { path: 'form-templates/name-entry', component: BaseDocPageComponent, data: {
    path: '_docs/form-templates/name-entry',
    componentName: 'NameEntry',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: NameEntryExampleComponent }
  ]},
  { path: 'form-templates/phone-entry', component: BaseDocPageComponent, data: {
    path: '_docs/form-templates/phone-entry',
    componentName: 'PhoneEntry',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: PhoneEntryExampleComponent }
  ]},
  { path: 'layout/filter-drawer', component: BaseDocPageComponent, data: {
    path: '_docs/layout/filter-drawer',
    componentName: 'SamFilterDrawerComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamFilterDrawerComponentExampleComponent }
  ]},
  { path: 'layout/filters-wrapper', component: BaseDocPageComponent, data: {
    path: '_docs/layout/filters-wrapper',
    componentName: 'SamFiltersWrapperComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamFiltersWrapperComponentExampleComponent }
  ]},
  { path: 'layout/page', component: BaseDocPageComponent, data: {
    path: '_docs/layout/page',
    componentName: 'SamPageComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamPageComponentExampleComponent }
  ]},
  { path: 'layout/pagination', component: BaseDocPageComponent, data: {
    path: '_docs/layout/pagination',
    componentName: 'SamPaginationNextComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamPaginationNextComponentExampleComponent }
  ]},
  { path: 'layout/toolbar', component: BaseDocPageComponent, data: {
    path: '_docs/layout/toolbar',
    componentName: 'SamToolbarComponent',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: SamToolbarComponentExampleComponent }
  ]},
  { path: 'wrappers/fieldset-wrapper', component: BaseDocPageComponent, data: {
    path: '_docs/wrappers/fieldset-wrapper',
    componentName: 'FieldsetWrapper',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: FieldsetWrapperExampleComponent }
  ]},
  { path: 'wrappers/label-wrapper', component: BaseDocPageComponent, data: {
    path: '_docs/wrappers/label-wrapper',
    componentName: 'LabelWrapper',
			sections: ['component-example.html','component-example.ts','documentation.md']}, children: [
    { path: '', component: LabelWrapperExampleComponent }
  ]},
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

