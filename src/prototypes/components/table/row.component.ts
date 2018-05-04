import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CdkHeaderRow, CdkRow, CDK_ROW_TEMPLATE} from '@angular/cdk';

/** Workaround for https://github.com/angular/angular/issues/17849 */
export const _SamHeaderRow = CdkHeaderRow;
export const _SamRow = CdkRow;

/** Header template container that contains the cell outlet. Adds the right class and role. */
@Component({
  selector: 'sam-header-row',
  template: CDK_ROW_TEMPLATE,
  host: {
    'class': 'sam-header-row',
    'role': 'row',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SamHeaderRow extends _SamHeaderRow { }

/** Data row template container that contains the cell outlet. Adds the right class and role. */
@Component({
  selector: 'sam-row',
  template: CDK_ROW_TEMPLATE,
  host: {
    'class': 'sam-row',
    'role': 'row',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SamRow extends _SamRow { }
