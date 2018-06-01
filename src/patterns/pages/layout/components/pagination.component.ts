import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * The <sam-pagination> allows users to select a page
 */
@Component({
  selector: 'sam-databank-pagination',
  template: `
<ul class="usa-pagination usa-color-text usa-color-primary-darkest usa-color-text-white" aria-label="pagination" [ngClass]="disabled && 'disabled'">
    <li *ngIf="showPrevious()"><a tabindex="0" class="page-previous" aria-label="previous" (click)="onPreviousClick()" (keyup.enter)="onPreviousClick()">&lsaquo; Prev</a></li>
    <li><a tabindex="0" class="page-button" [ngClass]="textDecoration(1)" (click)="onPageClick(1)" [attr.aria-label]="getAriaLabel(1)" (keyup.enter)="onPageClick(1)">1</a></li>
    <li *ngIf="showFirstEllipsis()"><span class="first-ellipsis">&hellip;</span></li>
    <li *ngFor="let i of consecutivePageRange()"><a tabindex="0" class="page-button" [ngClass]="textDecoration(i)" (click)="onPageClick(i)" [attr.aria-label]="getAriaLabel(i)" (keyup.enter)="onPageClick(i)">{{i}}</a></li>
    <li *ngIf="showLastEllipsis()"><span class="last-ellipsis">&hellip;</span></li>
    <li *ngIf="!dontShowLast && showLastButton()"><a tabindex="0" class="page-button" [ngClass]="textDecoration(totalPages)" (click)="onPageClick(totalPages)" [attr.aria-label]="getAriaLabel(totalPages)" (keyup.enter)="onPageClick(totalPages)">{{totalPages}}</a></li>
    <li *ngIf="showNext()"><a tabindex="0" class="page-next" aria-label="next" (click)="onNextClick()" (keyup.enter)="onNextClick()">Next &rsaquo;</a></li>
</ul>
`,
})
export class SamDatabankPaginationComponent {

    private maxPagesBeforeOrAfterCurrent: number = 3;
    private ellipsisThreshold: number = 6; // The threshold to check whether ellipsis is needed
    private maxTotalPageWithoutEllipsis: number = 10; // If the total number of pages is less than this threshold, display all pages
    public pageSize = 10;
    
    /**
     * Sets the disabled status of the component, defaults to false
     */
    @Input() disabled: boolean = false;
    /**
     *
     */
    @Input() dontShowLast: boolean = true;
    /**
     * Shows the current page number
     */
    @Input() currentPage: number;
    /**
     * Shows the number of total pages
     */
    @Input() totalPages: number;
    /**
     * Event emitted when current page is changed
     */
    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

    consecutivePageRange() {
        var start = 2;
        var end = this.totalPages - 1;
        // If total number of pages less than or equal to 10, then display all page links
        // Otherwise, use the algorithm to calculate the start and end page to show between the first and last page
        if(this.totalPages > this.maxTotalPageWithoutEllipsis){
            // If the current page is less than the threshold, then display first 8 page links followed by ellipsis and the last page link
            if(this.currentPage < this.ellipsisThreshold){
                end = start + this.ellipsisThreshold;
            }
            // If the current page is greater than the total page minus threshold, then display the first page link followed by ellipsis and the last 8 page links
            else if(this.currentPage > this.totalPages - this.ellipsisThreshold){
                start = end - this.ellipsisThreshold;
            }
            // For all other conditions, display the first page link followed by ellipsis and three links before and after the current page followed by ellipsis and the last page link
            else{
                start = this.currentPage - this.maxPagesBeforeOrAfterCurrent;
                end = this.currentPage + this.maxPagesBeforeOrAfterCurrent;
            }
        }

        let ret = [];
        for (let i = start; i <= end; i++) {
            ret.push(i);
        }
        return ret;
    }

    onPageClick(pageNumber: number) {
        this.currentPage = pageNumber;
        this.pageChange.emit(this.currentPage);
    }

    onNextClick() {
        this.onPageClick(this.currentPage + 1);
    }

    onPreviousClick() {
        this.onPageClick(this.currentPage - 1);
    }

    showPrevious() {
        return this.currentPage > 1;
    }

    showNext() {
        return this.currentPage < this.totalPages;
    }

    showLastButton() {
        return this.totalPages > 1;
    }

    showLastEllipsis() {
        return this.totalPages > this.maxTotalPageWithoutEllipsis && this.currentPage <= this.totalPages - this.ellipsisThreshold;
    }

    showFirstEllipsis() {
        return this.totalPages > this.maxTotalPageWithoutEllipsis && this.currentPage >= this.ellipsisThreshold;
    }

    textDecoration(i) {
        return this.currentPage === i ? 'usa-current' : '';
    }

    getAriaLabel(i){
        return this.currentPage === i ? 'current' : '';
    }
}
