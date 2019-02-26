
/* tslint:disable */
/******************************************************/
/* File generated in ../config/helpers.js             */
/******************************************************/
// Angular Dependencies
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BaseExampleComponent } from './baseexample.component';
import { BaseDocPageComponent } from './base-doc-page.component';
import { Doc2TemplateComponent } from './doc2.component';

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
import { SamDateRangeV2ExampleComponent } from './experimental/date-range-v2/component-example';
import { SamDollarComponentExampleComponent } from './experimental/dollar/component-example';
import { SamFiltersComponentExampleComponent } from './experimental/filters/component-example';
import { SamHeadingComponentExampleComponent } from './experimental/heading/component-example';
import { SamHierarchicalComponentExampleComponent } from './experimental/hierarchical/component-example';
import { SamHierarchicalAutocompleteComponentExampleComponent } from './experimental/hierarchical-autocomplete/component-example';
import { SamHierarchicalSelectedResultComponentExampleComponent } from './experimental/hierarchical-selected-result/component-example';
import { SamHierarchicalTreeComponentExampleComponent } from './experimental/hierarchical-tree/component-example';
import { SamHierarchicalTreeGridComponentExampleComponent } from './experimental/hierarchical-tree-grid/component-example';
import { SamIconComponentExampleComponent } from './experimental/icon/component-example';
import { SamInputMaskComponentExampleComponent } from './experimental/input-mask/component-example';
import { SamLabelNextComponentExampleComponent } from './experimental/label/component-example';
import { SamListComponentExampleComponent } from './experimental/list/component-example';
import { SamListboxComponentExampleComponent } from './experimental/listbox/component-example';
import { SamMasterPageComponentExampleComponent } from './experimental/master-page/component-example';
import { SamPageSampleComponentExampleComponent } from './experimental/page/component-example';
import { ProgressComponentExampleComponent } from './experimental/progress/component-example';
import { SamResourcesWrapperComponentExampleComponent } from './experimental/resources-wrapper/component-example';
import { SamSearchComponentExampleComponent } from './experimental/search/component-example';
import { SamSidebarComponentExampleComponent } from './experimental/sidebar/component-example';
import { SamSideNavigationToolbarComponentExampleComponent } from './experimental/sideNavigationToolbar/component-example';
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


import { DocTemplateComponent } from './doc.template';
import { routing } from './doc.routes.dynamic';
import { StaticPageComponent } from './static.component';
import { SamUIKitModule, SamFilterModule } from '@gsa-sam/sam-ui-elements';
import { InterfacesComponent } from './data-structures/interfaces/interfaces.component';
import { SiteComponentsModule } from '../app/site-components/sitecomponents.module';
import { CdkTableModule } from '@angular/cdk';
import { FormlyModule } from '@ngx-formly/core';
import { HierarchicalDataService } from './services/hierarchical.service';

/**
 * AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [
    SamAccordionComponentExampleComponent,
    SamActionButtonExampleComponent,
    SamActionsDropdownComponentExampleComponent,
    SamAlertComponentExampleComponent,
    SamAlertFooterComponentExampleComponent,
    SamBadgeComponentExampleComponent,
    SamBreadcrumbsComponentExampleComponent,
    SamCommentsComponentExampleComponent,
    SamDataTableComponentExampleComponent,
    DownloadExampleComponent,
    SamHistoryComponentExampleComponent,
    SamImageComponentExampleComponent,
    SamModalComponentExampleComponent,
    MultiselectDropdownExampleComponent,
    SamPageTitleExampleComponent,
    SamPaginationComponentExampleComponent,
    SamPointOfContactComponentExampleComponent,
    SamProgressExampleComponent,
    SamSidenavComponentExampleComponent,
    SamSpinnerComponentExampleComponent,
    SamTabsComponentExampleComponent,
    SamClickOutsideDirectiveExampleComponent,
    SamDragDropDirectiveExampleComponent,
    SamExternalLinkDirectiveExampleComponent,
    SamFocusDirectiveExampleComponent,
    SamStickyComponentExampleComponent,
    SamTabOutsideDirectiveExampleComponent,
    ButtonExampleComponent,
    SamActionsListComponentExampleComponent,
    SamAlertNextComponentExampleComponent,
    SamBoxComponentExampleComponent,
    ButtonNextExampleComponent,
    SamContainerComponentExampleComponent,
    SamDateRangeV2ExampleComponent,
    SamDollarComponentExampleComponent,
    SamFiltersComponentExampleComponent,
    SamHeadingComponentExampleComponent,
    SamHierarchicalComponentExampleComponent,
    SamHierarchicalAutocompleteComponentExampleComponent,
    SamHierarchicalSelectedResultComponentExampleComponent,
    SamHierarchicalTreeComponentExampleComponent,
    SamHierarchicalTreeGridComponentExampleComponent,
    SamIconComponentExampleComponent,
    SamInputMaskComponentExampleComponent,
    SamLabelNextComponentExampleComponent,
    SamListComponentExampleComponent,
    SamListboxComponentExampleComponent,
    SamMasterPageComponentExampleComponent,
    SamPageSampleComponentExampleComponent,
    ProgressComponentExampleComponent,
    SamResourcesWrapperComponentExampleComponent,
    SamSearchComponentExampleComponent,
    SamSidebarComponentExampleComponent,
    SamSideNavigationToolbarComponentExampleComponent,
    SamTabsNextComponentExampleComponent,
    SamTitleComponentExampleComponent,
    SamVideoPlayerComponentExampleComponent,
    SamYoutubeComponentExampleComponent,
    SamAutocompleteComponentExampleComponent,
    SamAutocompleteMultiselectComponentExampleComponent,
    SamCheckboxComponentExampleComponent,
    SamDateComponentExampleComponent,
    SamDateRangeComponentExampleComponent,
    SamDateTimeComponentExampleComponent,
    SamNumberComponentExampleComponent,
    SamRadioComponentExampleComponent,
    SamSelectComponentExampleComponent,
    SamTextComponentExampleComponent,
    SamTextareaComponentExampleComponent,
    SamTimeComponentExampleComponent,
    SamToggleSwitchComponentExampleComponent,
    SamUploadComponentExampleComponent,
    PhoneGroupExampleComponent,
    NameEntryExampleComponent,
    PhoneEntryExampleComponent,
    SamFilterDrawerComponentExampleComponent,
    SamFiltersWrapperComponentExampleComponent,
    SamPageComponentExampleComponent,
    SamPaginationNextComponentExampleComponent,
    SamToolbarComponentExampleComponent,
    FieldsetWrapperExampleComponent,
    LabelWrapperExampleComponent,
    InterfacesComponent,
    DocTemplateComponent,
    StaticPageComponent,
    BaseExampleComponent,
    BaseDocPageComponent,
    Doc2TemplateComponent
  ],
  entryComponents: [
    SamAccordionComponentExampleComponent,
    SamActionButtonExampleComponent,
    SamActionsDropdownComponentExampleComponent,
    SamAlertComponentExampleComponent,
    SamAlertFooterComponentExampleComponent,
    SamBadgeComponentExampleComponent,
    SamBreadcrumbsComponentExampleComponent,
    SamCommentsComponentExampleComponent,
    SamDataTableComponentExampleComponent,
    DownloadExampleComponent,
    SamHistoryComponentExampleComponent,
    SamImageComponentExampleComponent,
    SamModalComponentExampleComponent,
    MultiselectDropdownExampleComponent,
    SamPageTitleExampleComponent,
    SamPaginationComponentExampleComponent,
    SamPointOfContactComponentExampleComponent,
    SamProgressExampleComponent,
    SamSidenavComponentExampleComponent,
    SamSpinnerComponentExampleComponent,
    SamTabsComponentExampleComponent,
    SamClickOutsideDirectiveExampleComponent,
    SamDragDropDirectiveExampleComponent,
    SamExternalLinkDirectiveExampleComponent,
    SamFocusDirectiveExampleComponent,
    SamStickyComponentExampleComponent,
    SamTabOutsideDirectiveExampleComponent,
    ButtonExampleComponent,
    SamActionsListComponentExampleComponent,
    SamAlertNextComponentExampleComponent,
    SamBoxComponentExampleComponent,
    ButtonNextExampleComponent,
    SamContainerComponentExampleComponent,
    SamDateRangeV2ExampleComponent,
    SamDollarComponentExampleComponent,
    SamFiltersComponentExampleComponent,
    SamHeadingComponentExampleComponent,
    SamHierarchicalComponentExampleComponent,
    SamHierarchicalAutocompleteComponentExampleComponent,
    SamHierarchicalSelectedResultComponentExampleComponent,
    SamHierarchicalTreeComponentExampleComponent,
    SamHierarchicalTreeGridComponentExampleComponent,
    SamIconComponentExampleComponent,
    SamInputMaskComponentExampleComponent,
    SamLabelNextComponentExampleComponent,
    SamListComponentExampleComponent,
    SamListboxComponentExampleComponent,
    SamMasterPageComponentExampleComponent,
    SamPageSampleComponentExampleComponent,
    ProgressComponentExampleComponent,
    SamResourcesWrapperComponentExampleComponent,
    SamSearchComponentExampleComponent,
    SamSidebarComponentExampleComponent,
    SamSideNavigationToolbarComponentExampleComponent,
    SamTabsNextComponentExampleComponent,
    SamTitleComponentExampleComponent,
    SamVideoPlayerComponentExampleComponent,
    SamYoutubeComponentExampleComponent,
    SamAutocompleteComponentExampleComponent,
    SamAutocompleteMultiselectComponentExampleComponent,
    SamCheckboxComponentExampleComponent,
    SamDateComponentExampleComponent,
    SamDateRangeComponentExampleComponent,
    SamDateTimeComponentExampleComponent,
    SamNumberComponentExampleComponent,
    SamRadioComponentExampleComponent,
    SamSelectComponentExampleComponent,
    SamTextComponentExampleComponent,
    SamTextareaComponentExampleComponent,
    SamTimeComponentExampleComponent,
    SamToggleSwitchComponentExampleComponent,
    SamUploadComponentExampleComponent,
    PhoneGroupExampleComponent,
    NameEntryExampleComponent,
    PhoneEntryExampleComponent,
    SamFilterDrawerComponentExampleComponent,
    SamFiltersWrapperComponentExampleComponent,
    SamPageComponentExampleComponent,
    SamPaginationNextComponentExampleComponent,
    SamToolbarComponentExampleComponent,
    FieldsetWrapperExampleComponent,
    LabelWrapperExampleComponent,
    InterfacesComponent,
    DocTemplateComponent,
    StaticPageComponent,
    BaseExampleComponent,
    BaseDocPageComponent,
    Doc2TemplateComponent
  ],
  imports: [
    CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SamUIKitModule,
		SamFilterModule,
		FormlyModule,
    routing,
		SiteComponentsModule,
		CdkTableModule
  ],
  exports: [BaseExampleComponent], 
  providers: [HierarchicalDataService]
})
export class DocModule { }
