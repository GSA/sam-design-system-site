
/******************************************************/
/* File generated in ../config/helpers.js             */
/******************************************************/
// Angular Dependencies
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BaseExampleComponent } from './baseexample.component';

import { AccordionExampleComponent } from './components/accordion/component-example';
import { SamActionButtonExampleComponent } from './components/actions/action-button/component-example';
import { SamActionsDropdownComponentExampleComponent } from './components/actions/actions-dropdown/component-example';
import { AlertExampleComponent } from './components/alert/component-example';
import { SamAlertFooterComponentExampleComponent } from './components/alert-footer/component-example';
import { SamBadgeComponentExampleComponent } from './components/badge/component-example';
import { BannerExampleComponent } from './components/banner/component-example';
import { SamBreadcrumbsComponentExampleComponent } from './components/breadcrumbs/component-example';
import { CollapsibleExampleComponent } from './components/collapsible/component-example';
import { SamCommentsComponentExampleComponent } from './components/comments/component-example';
import { DownloadExampleComponent } from './components/download/component-example';
import { SamFilesComponentExampleComponent } from './components/files/component-example';
import { FiltersContainerExampleComponent } from './components/filters-container/component-example';
import { SamHeaderComponentExampleComponent } from './components/header/component-example';
import { HistoryExampleComponent } from './components/history/component-example';
import { SamImageComponentExampleComponent } from './components/image/component-example';
import { InfoAccordionExampleComponent } from './components/info-accordion/component-example';
import { LabelExampleComponent } from './components/label/component-example';
import { ModalExampleComponent } from './components/modal/component-example';
import { MultiselectDropdownExampleComponent } from './components/multiselect-dropdown/component-example';
import { PaginationExampleComponent } from './components/pagination/component-example';
import { POCExampleComponent } from './components/point-of-contact/component-example';
import { SamProgressExampleComponent } from './components/progress-bar/component-example';
import { SidenavExampleComponent } from './components/sidenav/component-example';
import { SpinnerExampleComponent } from './components/spinner/component-example';
import { TabsExampleComponent } from './components/tabs/component-example';
import { SamUploadComponentExampleComponent } from './components/upload/component-example';
import { ClickOutsideExampleComponent } from './directives/click-outside/component-example';
import { SamDragDropDirectiveExampleComponent } from './directives/drag-drop/component-example';
import { SamFocusDirectiveExampleComponent } from './directives/focus/component-example';
import { StickyExampleComponent } from './directives/sticky/component-example';
import { TabOutsideExampleComponent } from './directives/tab-outside/component-example';
import { ButtonExampleComponent } from './elements/button/component-example';
import { SamBoxComponentExampleComponent } from './experimental/box/component-example';
import { SamContainerComponentExampleComponent } from './experimental/container/component-example';
import { SamHeadingComponentExampleComponent } from './experimental/heading/component-example';
import { SamIconComponentExampleComponent } from './experimental/icon/component-example';
import { SamListComponentExampleComponent } from './experimental/list/component-example';
import { SamMasterPageComponentExampleComponent } from './experimental/master-page/component-example';
import { SamPageComponentExampleComponent } from './experimental/page/component-example';
import { SamSidebarComponentExampleComponent } from './experimental/sidebar/component-example';
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
import { PhoneGroupExampleComponent } from './form-templates/international-phone/component-example';
import { NameEntryExampleComponent } from './form-templates/name-entry/component-example';
import { PhoneEntryExampleComponent } from './form-templates/phone-entry/component-example';
import { CountryServiceDirectiveExampleComponent } from './service-directives/autocomplete/country/component-example';
import { StateServiceDirectiveExampleComponent } from './service-directives/autocomplete/state/component-example';
import { FieldsetWrapperExampleComponent } from './wrappers/fieldset-wrapper/component-example';
import { LabelWrapperExampleComponent } from './wrappers/label-wrapper/component-example';


import { DocTemplateComponent } from './doc.template';
import { routing } from './doc.routes.dynamic';
import { StaticPageComponent } from './static.component';
import { SamUIKitModule } from 'sam-ui-elements/src/ui-kit';
import { InterfacesComponent } from './data-structures/interfaces/interfaces.component';
import { SiteComponentsModule } from '../app/site-components/sitecomponents.module';

/**
 * AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [
    AccordionExampleComponent,
    SamActionButtonExampleComponent,
    SamActionsDropdownComponentExampleComponent,
    AlertExampleComponent,
    SamAlertFooterComponentExampleComponent,
    SamBadgeComponentExampleComponent,
    BannerExampleComponent,
    SamBreadcrumbsComponentExampleComponent,
    CollapsibleExampleComponent,
    SamCommentsComponentExampleComponent,
    DownloadExampleComponent,
    SamFilesComponentExampleComponent,
    FiltersContainerExampleComponent,
    SamHeaderComponentExampleComponent,
    HistoryExampleComponent,
    SamImageComponentExampleComponent,
    InfoAccordionExampleComponent,
    LabelExampleComponent,
    ModalExampleComponent,
    MultiselectDropdownExampleComponent,
    PaginationExampleComponent,
    POCExampleComponent,
    SamProgressExampleComponent,
    SidenavExampleComponent,
    SpinnerExampleComponent,
    TabsExampleComponent,
    SamUploadComponentExampleComponent,
    ClickOutsideExampleComponent,
    SamDragDropDirectiveExampleComponent,
    SamFocusDirectiveExampleComponent,
    StickyExampleComponent,
    TabOutsideExampleComponent,
    ButtonExampleComponent,
    SamBoxComponentExampleComponent,
    SamContainerComponentExampleComponent,
    SamHeadingComponentExampleComponent,
    SamIconComponentExampleComponent,
    SamListComponentExampleComponent,
    SamMasterPageComponentExampleComponent,
    SamPageComponentExampleComponent,
    SamSidebarComponentExampleComponent,
    SamYoutubeComponentExampleComponent,
    AutocompleteExampleComponent,
    AutocompleteMultiselectExampleComponent,
    CheckboxExampleComponent,
    DateExampleComponent,
    SamDateRangeComponentExampleComponent,
    DateTimeExampleComponent,
    NumberExampleComponent,
    RadioExampleComponent,
    SelectExampleComponent,
    TextExampleComponent,
    TextareaExampleComponent,
    TimeExampleComponent,
    ToggleSwitchExampleComponent,
    PhoneGroupExampleComponent,
    NameEntryExampleComponent,
    PhoneEntryExampleComponent,
    CountryServiceDirectiveExampleComponent,
    StateServiceDirectiveExampleComponent,
    FieldsetWrapperExampleComponent,
    LabelWrapperExampleComponent,
    InterfacesComponent,
    DocTemplateComponent,
    StaticPageComponent,
    BaseExampleComponent
  ],
  entryComponents: [
    AccordionExampleComponent,
    SamActionButtonExampleComponent,
    SamActionsDropdownComponentExampleComponent,
    AlertExampleComponent,
    SamAlertFooterComponentExampleComponent,
    SamBadgeComponentExampleComponent,
    BannerExampleComponent,
    SamBreadcrumbsComponentExampleComponent,
    CollapsibleExampleComponent,
    SamCommentsComponentExampleComponent,
    DownloadExampleComponent,
    SamFilesComponentExampleComponent,
    FiltersContainerExampleComponent,
    SamHeaderComponentExampleComponent,
    HistoryExampleComponent,
    SamImageComponentExampleComponent,
    InfoAccordionExampleComponent,
    LabelExampleComponent,
    ModalExampleComponent,
    MultiselectDropdownExampleComponent,
    PaginationExampleComponent,
    POCExampleComponent,
    SamProgressExampleComponent,
    SidenavExampleComponent,
    SpinnerExampleComponent,
    TabsExampleComponent,
    SamUploadComponentExampleComponent,
    ClickOutsideExampleComponent,
    SamDragDropDirectiveExampleComponent,
    SamFocusDirectiveExampleComponent,
    StickyExampleComponent,
    TabOutsideExampleComponent,
    ButtonExampleComponent,
    SamBoxComponentExampleComponent,
    SamContainerComponentExampleComponent,
    SamHeadingComponentExampleComponent,
    SamIconComponentExampleComponent,
    SamListComponentExampleComponent,
    SamMasterPageComponentExampleComponent,
    SamPageComponentExampleComponent,
    SamSidebarComponentExampleComponent,
    SamYoutubeComponentExampleComponent,
    AutocompleteExampleComponent,
    AutocompleteMultiselectExampleComponent,
    CheckboxExampleComponent,
    DateExampleComponent,
    SamDateRangeComponentExampleComponent,
    DateTimeExampleComponent,
    NumberExampleComponent,
    RadioExampleComponent,
    SelectExampleComponent,
    TextExampleComponent,
    TextareaExampleComponent,
    TimeExampleComponent,
    ToggleSwitchExampleComponent,
    PhoneGroupExampleComponent,
    NameEntryExampleComponent,
    PhoneEntryExampleComponent,
    CountryServiceDirectiveExampleComponent,
    StateServiceDirectiveExampleComponent,
    FieldsetWrapperExampleComponent,
    LabelWrapperExampleComponent,
    InterfacesComponent,
    DocTemplateComponent,
    StaticPageComponent,
    BaseExampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SamUIKitModule,
    routing,
    SiteComponentsModule
  ],
  exports: [BaseExampleComponent]
})
export class DocModule { }
