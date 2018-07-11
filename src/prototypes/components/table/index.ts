import {NgModule} from '@angular/core';
import {CdkTableModule} from '@angular/cdk';
import {CommonModule} from '@angular/common';
import {SamSortMultiHeaderComponent, SamMultiSortHeaderIntl} from './sort-multi-header.component';
import {SamMultiSortDirective} from './multicol-sort.directive';

import { ContextMenuAttachDirective } from './contextMenu/contextMenu.attach.directive';
import { ContextMenuItemDirective } from './contextMenu/contextMenu.item.directive';
import { ContextMenuComponent } from './contextMenu/contextMenu.component';
import { ContextMenuService } from './contextMenu/contextMenu.service';

import { SamDataTableModule } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/data-table/index';


@NgModule({
  imports: [CdkTableModule, CommonModule, SamDataTableModule],
  exports: [SamMultiSortDirective, ContextMenuComponent, ContextMenuItemDirective,
    SamSortMultiHeaderComponent, ContextMenuAttachDirective],
  declarations: [SamMultiSortDirective, ContextMenuComponent, ContextMenuItemDirective,
    SamSortMultiHeaderComponent, ContextMenuAttachDirective],
  providers: [SamMultiSortHeaderIntl, ContextMenuService]
})
export class SamExperimentalDataTableModule {}
