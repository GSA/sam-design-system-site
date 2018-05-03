import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {CDK_TABLE_TEMPLATE, CdkTable} from '@angular/cdk';

/** Workaround for https://github.com/angular/angular/issues/17849 */
export const _SamTable = CdkTable;

/**
 * Wrapper for the CdkTable with Material design styles.
 */
@Component({
  selector: 'md-table, sam-datatable',
  template: CDK_TABLE_TEMPLATE,
  host: {
    'class': 'sam-table',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SamDataTable<T> extends _SamTable<T> { }