/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {SamDataTable} from './table.component';
import {CdkTableModule} from '@angular/cdk';
import {SamCell, SamHeaderCell} from './cell.component';
import {SamHeaderRow, SamRow} from './row.component';
import {CommonModule} from '@angular/common';
import {SamSortHeader,MdSortHeaderIntl} from './sort-header.component';
import {SamSort} from './sort.directive';

export * from './cell.component';
export * from './table.component';
export * from './row.component';

@NgModule({
  imports: [CdkTableModule, CommonModule],
  exports: [SamDataTable, SamHeaderCell, SamCell, SamHeaderRow, SamRow, SamSort, SamSortHeader],
  declarations: [SamDataTable, SamHeaderCell, SamCell, SamHeaderRow, SamRow, SamSort, SamSortHeader],
  providers: [MdSortHeaderIntl]
})
export class SamDataTableModule {}