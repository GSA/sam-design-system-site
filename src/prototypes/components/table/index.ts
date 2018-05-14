import {NgModule} from '@angular/core';
import {SamDataTableComponent} from './table.component';
import {CdkTableModule} from '@angular/cdk';
import {SamCellDirective, SamHeaderCellDirective} from './cell.component';
import {SamHeaderRowComponent, SamRowComponent} from './row.component';
import {CommonModule} from '@angular/common';
import {SamSortHeaderComponent, SamSortHeaderIntl} from './sort-header.component';
import {SamSortMultiHeaderComponent, SamMultiSortHeaderIntl} from './sort-multi-header.component';
import {SamSortDirective} from './sort.directive';
import {SamMultiSortDirective} from './multicol-sort.directive';

import { ContextMenuAttachDirective } from './contextMenu/contextMenu.attach.directive';
import { ContextMenuItemDirective } from './contextMenu/contextMenu.item.directive';
import { ContextMenuComponent } from './contextMenu/contextMenu.component';
import { ContextMenuService } from './contextMenu/contextMenu.service';

export * from './cell.component';
export * from './table.component';
export * from './row.component';

@NgModule({
  imports: [CdkTableModule, CommonModule],
  exports: [SamDataTableComponent, SamHeaderCellDirective, SamCellDirective, SamMultiSortDirective, ContextMenuComponent, ContextMenuItemDirective,
    SamHeaderRowComponent, SamRowComponent, SamSortDirective, SamSortHeaderComponent, SamSortMultiHeaderComponent, ContextMenuAttachDirective],
  declarations: [SamDataTableComponent, SamHeaderCellDirective, SamCellDirective, SamMultiSortDirective, ContextMenuComponent, ContextMenuItemDirective,
    SamHeaderRowComponent, SamRowComponent, SamSortDirective, SamSortHeaderComponent, SamSortMultiHeaderComponent, ContextMenuAttachDirective],
  providers: [SamSortHeaderIntl, SamMultiSortHeaderIntl, ContextMenuService]
})
export class SamDataTableModule {}
