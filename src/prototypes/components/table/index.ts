import {NgModule} from '@angular/core';
import {SamDataTableComponent} from './table.component';
import {CdkTableModule} from '@angular/cdk';
import {SamCellDirective, SamHeaderCellDirective} from './cell.component';
import {SamHeaderRowComponent, SamRowComponent} from './row.component';
import {CommonModule} from '@angular/common';
import {SamSortHeaderComponent, SamSortHeaderIntl} from './sort-header.component';
import {SamSortDirective} from './sort.directive';

export * from './cell.component';
export * from './table.component';
export * from './row.component';

@NgModule({
  imports: [CdkTableModule, CommonModule],
  exports: [SamDataTableComponent, SamHeaderCellDirective, SamCellDirective,
    SamHeaderRowComponent, SamRowComponent, SamSortDirective, SamSortHeaderComponent],
  declarations: [SamDataTableComponent, SamHeaderCellDirective, SamCellDirective,
    SamHeaderRowComponent, SamRowComponent, SamSortDirective, SamSortHeaderComponent],
  providers: [SamSortHeaderIntl]
})
export class SamDataTableModule {}
