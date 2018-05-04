import {ChangeDetectionStrategy, Component,
    ViewEncapsulation, HostBinding} from '@angular/core';
import {CDK_TABLE_TEMPLATE, CdkTable} from '@angular/cdk';

/** Workaround for https://github.com/angular/angular/issues/17849 */
export const _SamTable = CdkTable;

/**
 * Wrapper for the CdkTable with Material design styles.
 */
@Component({
  selector: 'sam-datatable',
  template: CDK_TABLE_TEMPLATE,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SamDataTableComponent<T> extends _SamTable<T> {
    @HostBinding('class.sam-table') samTableClass = true;
}
