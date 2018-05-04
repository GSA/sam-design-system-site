import {Directive, ElementRef, Renderer2} from '@angular/core';
import {CdkCell, CdkColumnDef, CdkHeaderCell} from '@angular/cdk';

/** Workaround for https://github.com/angular/angular/issues/17849 */
export const _SamHeaderCellBase = CdkHeaderCell;
export const _SamCell = CdkCell;

/** Header cell template container that adds the right classes and role. */
@Directive({
  selector: 'sam-header-cell',
  host: {
    'class': 'sam-header-cell',
    'role': 'columnheader',
  },
})
export class SamHeaderCell extends _SamHeaderCellBase {
  constructor(columnDef: CdkColumnDef,
              elementRef: ElementRef,
              renderer: Renderer2) {
    super(columnDef, elementRef, renderer);
    renderer.addClass(elementRef.nativeElement, `sam-column-${columnDef.name}`);
  }
}

/** Cell template container that adds the right classes and role. */
@Directive({
  selector: 'sam-cell',
  host: {
    'class': 'sam-cell',
    'role': 'gridcell',
  },
})
export class SamCell extends _SamCell {
  constructor(columnDef: CdkColumnDef,
              elementRef: ElementRef,
              renderer: Renderer2) {
    super(columnDef, elementRef, renderer);
    renderer.addClass(elementRef.nativeElement, `sam-column-${columnDef.name}`);
  }
}