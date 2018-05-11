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

export * from './cell.component';
export * from './table.component';
export * from './row.component';

@NgModule({
  imports: [CdkTableModule, CommonModule],
  exports: [SamDataTableComponent, SamHeaderCellDirective, SamCellDirective, SamMultiSortDirective,
    SamHeaderRowComponent, SamRowComponent, SamSortDirective, SamSortHeaderComponent, SamSortMultiHeaderComponent],
  declarations: [SamDataTableComponent, SamHeaderCellDirective, SamCellDirective, SamMultiSortDirective,
    SamHeaderRowComponent, SamRowComponent, SamSortDirective, SamSortHeaderComponent, SamSortMultiHeaderComponent],
  providers: [SamSortHeaderIntl, SamMultiSortHeaderIntl]
})
export class SamDataTableModule {}
