import {
    ChangeDetectionStrategy, Injectable, ChangeDetectorRef, Component, Input,
    Optional, ViewEncapsulation, OnDestroy, OnInit, HostBinding, HostListener
  } from '@angular/core';
import {SamSortDirective, SamSortable, SortDirection} from './sort.directive';
import {CdkColumnDef, coerceBooleanProperty} from '@angular/cdk';
import {Subscription} from 'rxjs/Subscription';


/**
 * To modify the labels and text displayed, create a new instance of MdSortHeaderIntl and
 * include it in a custom provider.
 */
@Injectable()
export class MdSortHeaderIntl {
  sortButtonLabel = (id: string) => {
    return `Change sorting for ${id}`;
  }

  /** A label to describe the current sort (visible only to screenreaders). */
  sortDescriptionLabel = (id: string, direction: SortDirection) => {
    return `Sorted by ${id} ${direction === 'asc' ? 'ascending' : 'descending'}`;
  }
}
/* tslint:disable */
/**
 * Applies sorting behavior (click to change sort) and styles to an element, including an
 * arrow to display the current sort direction.
 *
 * Must be provided with an id and contained within a parent MdSort directive.
 *
 * If used on header cells in a CdkTable, it will automatically default its id from its containing
 * column definition.
 */
@Component({
selector: '[sam-sort-header]',
template: `
<div class="sam-sort-header-container"
     [class.sam-sort-header-position-before]="arrowPosition == 'before'">
  <button class="sam-sort-header-button" type="button"
          [attr.aria-label]="_intl.sortButtonLabel(id)">
    <ng-content></ng-content>
  </button>

  <div *ngIf="_isSorted()"
       class="fa"
       [class.fa-arrow-up]="_sort.direction == 'asc'"
       [class.fa-arrow-down]="_sort.direction == 'desc'">
  </div>
</div>

<span class="sr-only" *ngIf="_isSorted()">
  {{_intl.sortDescriptionLabel(id, _sort.direction)}}
</span>
`,
encapsulation: ViewEncapsulation.None,
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SamSortHeaderComponent implements SamSortable, OnInit, OnDestroy {
    /** @docs-private  */
    sortSubscription: Subscription;

    /**
     * ID of this sort header. If used within the context of a CdkColumnDef, this will default to
     * the column's name.
     */
    @Input() id: string;

    /** Sets the position of the arrow that displays when sorted. */
    @Input() arrowPosition: 'before' | 'after' = 'after';

    /** Overrides the sort start value of the containing MdSort for this SamSortable. */
    @Input('start') start: 'asc' | 'desc';

    /** Overrides the disable clear value of the containing MdSort for this SamSortable. */
    @Input()

    @HostBinding('class.sam-sort-header-sorted') samSortHeaderSorted(){
        return this._isSorted();
    }
    @HostListener('click') hostClick(){
        return this._sort.sort(this);
    }
    get disableClear() { return this._disableClear; }
    set disableClear(v) { this._disableClear = coerceBooleanProperty(v); }
    private _disableClear: boolean;


    constructor(public _intl: MdSortHeaderIntl,
                private _changeDetectorRef: ChangeDetectorRef,
                @Optional() public _sort: SamSortDirective,
                @Optional() public _cdkColumnDef: CdkColumnDef) {
        if (!_sort) {
        //throw getMdSortHeaderNotContainedWithinMdSortError();
        }

        this.sortSubscription = _sort.mdSortChange.subscribe(() => _changeDetectorRef.markForCheck());
    }

    ngOnInit() {
        if (!this.id && this._cdkColumnDef) {
        this.id = this._cdkColumnDef.name;
        }

        this._sort.register(this);
    }

    ngOnDestroy() {
        this._sort.deregister(this);
        this.sortSubscription.unsubscribe();
    }

    /** Whether this MdSortHeader is currently sorted in either ascending or descending order. */
    _isSorted() {
        return this._sort.active == this.id && this._sort.direction;
    }
}