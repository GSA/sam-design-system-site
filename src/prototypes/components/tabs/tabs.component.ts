import {
  Component,
  SimpleChanges,
  ChangeDetectorRef,
  AfterContentInit,
  ContentChildren,
  QueryList,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  ElementRef,
  OnChanges,
  ViewChild
} from '@angular/core';
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';

/**
 * The <sam-tab> component contains the content for a tab
 */
@Component({
  selector: 'sam-tab-next',
  template: `
    <ng-template #titleVar>
      <ng-content select=".title"></ng-content>
    </ng-template>
    <div [class.hide]="!active">
      <ng-content></ng-content>
    </div>
  `
})
export class SamTabNextComponent {
  @ViewChild('titleVar') titleVar;

  /**
   * Set tab text
   */
  @Input() tabTitle: string;
  /**
   * Set tab active class, defaults to false
   */
  @Input() active: boolean = false;
  /**
   * Set tab disabled class, defaults to false
   */
  @Input() disabled: boolean = false;
  /**
   * Set if tab is a floating action button
   */
  @Input() float: boolean = false;
}

/**
 * The <samTabs> component is a wrapper for navigating through and
 * displaying tabs
 */
@Component({
  selector: 'sam-tabs-next',
  template: `
  <div class="sam-tabs-next-wrapper">
    <div *ngIf="scrollable" class="tab-prev-btn-wrapper">
      <div
        (mousedown)="scrollMouseDown('left')"
        (mouseup)="scrollMouseUp()"
        class="tab-nav-btn tab-prev-btn"><sam-icon [icon]="faArrowCircleLeft"></sam-icon></div>
    </div>
    <div #tabsContent class="sam-tabs-next sam-ui menu"
      [ngClass]="[themes[theme],size,scrolling]"
      *ngIf="tabs && tabs.length">
      <ng-container *ngFor="let tab of tabs; let i = index">
        <a class="item" #tabEl (click)="selectTab(tab, i)"
          [ngClass]="{ active: tab.active, disabled: tab.disabled }"
          *ngIf="!tab.float">
          <ng-container
            *ngTemplateOutlet="tab.titleVar;context:tab">
          </ng-container>
        </a>
        <button #tabEl class="sam-ui button secondary tiny"
          [attr.disabled]="tab.disabled ? 'disabled' : null"
          [innerText]="tab.titleVar" (click)="selectTab(tab, i)"
          *ngIf="tab.float">
        </button>
      </ng-container>
    </div>
    <div *ngIf="scrollable" class="tab-next-btn-wrapper">
      <div
        (mousedown)="scrollMouseDown('right')"
        (mouseup)="scrollMouseUp()"
        class="tab-nav-btn tab-next-btn"><sam-icon [icon]="faArrowCircleRight"></sam-icon></div>
    </div>
  </div>
  <ng-content></ng-content>
  `
})
export class SamTabsNextComponent implements AfterContentInit, OnChanges {
  @ContentChildren(SamTabNextComponent) tabs: QueryList<SamTabNextComponent>;
  @ViewChildren('tabEl') tabEls: QueryList<ElementRef>;
  @ViewChild('tabsContent') tabsContent: ElementRef;
  /**
  * Set tabs size
  */
  @Input()
  set size(key: string) {
    if (key.match(/(mini|tiny|small|default|large|huge|big)/)) {
      this._size = ''; // (key === 'default') ? '' : '';
    }
  }

  get size(): string {
    return !this._size.length ? 'default' : this._size;
  }

  /**
   * Set tabs theme
   */
  @Input()
  set theme(key: string) {
    if (this.themes[key]) {
      this._theme = key;
    }
  }

  get theme(): string {
    return this._theme;
  }

  /**
   * Sets the active tab
   */
  @Input() active: number = -1;

  /**
   * Emits change on active tab index
   */
  @Output() activeChange: EventEmitter<number> = new EventEmitter();
  /**
   * (deprecated) Event emitted on tab selection
   */
  @Output() currentSelectedTab = new EventEmitter();
  /**
   * Event emitted on tab selection
   */
  @Output() tabChange = new EventEmitter();

  private _size = 'large';
  private _theme = 'default';
  private themes = {
    default: 'secondary pointing',
    separate: 'separate tabular',
  };

  scrollable = false;
  scrolling = '';
  faArrowCircleLeft = faArrowCircleLeft;
  faArrowCircleRight = faArrowCircleRight;

  constructor(private cdr: ChangeDetectorRef) {}

  _setActiveTab() {
    const arr = this.tabs.toArray();
    if (this.active >= 0 && this.active < arr.length) {
      this.tabs.forEach(tab => tab.active = false);
      arr[this.active].active = true;
      this.cdr.detectChanges();
    } else {
      console.warn(`index ${this.active} does not exist in tabs component`);
    }
  }

  ngOnChanges(c: SimpleChanges) {
    if (c.active && this.tabs) {
      this._setActiveTab();
    }
  }

  ngAfterContentInit() {
    if (this.active === -1 && this.tabs.length > 0) {
      let tabCheck = false;
      this.tabs.forEach(tab => {
        if (tab.active) {
          tabCheck = true;
        }
      });
      if (!tabCheck) {
        this.active = 0;
        this._setActiveTab();
      }
    } else if (this.active >= 0 && this.tabs.length > 0) {
      this._setActiveTab();
    }

    this.tabs.changes.subscribe(() => {
      if (this.tabs.length >= 1) {
        this.selectTab(this.tabs.first, 0);
      }
    });
    
  }

  ngAfterViewInit(){
    if(this.tabsContent.nativeElement.scrollWidth > this.tabsContent.nativeElement.clientWidth){
      this.scrollable = true;
      this.scrolling = this.scrollable ? 'scrolling' : '';
      this.cdr.detectChanges();
    }
  }

  selectTab(tab: SamTabNextComponent, index) {
      this.scrollToEl(this.tabEls.toArray()[index].nativeElement);
      this.tabs.forEach(t => t.active = false);
      tab.active = true;
      this.active = index;
      this.cdr.detectChanges();
      this.activeChange.emit(this.active);
      this.currentSelectedTab.emit(tab);
      this.tabChange.emit(tab);
  }

  timeInterval;
  scrollMouseDown(direction){
    let comp = this;
    if(direction == 'left'){
      comp.scrollLeft();
    } else {
      comp.scrollRight();
    }
    console.log('first fire');
    this.timeInterval=setInterval(function(){
      console.log('rep fire', direction);
      if(direction == 'left'){
        comp.scrollLeft();
      } else {
        comp.scrollRight();
      }
    },800);
  }
  scrollMouseUp(){
    clearInterval(this.timeInterval);
  }
  scrollLeft(){ 
    let found = false;
    let elArr = this.tabEls.toArray();
    for(let idx in elArr){
      let item = elArr[idx];
      let prevItem = parseInt(idx)!=0 ? elArr[parseInt(idx)-1] : null;
      let isElVisible = this.isScrolledIntoView(item.nativeElement);
      let isPrevElVisible = prevItem ? this.isScrolledIntoView(prevItem.nativeElement) : null;
      if(isElVisible && !isPrevElVisible && prevItem){
        found = true;
        //this.isScrolledIntoView(prevItem.nativeElement,true)
        this.scrollToEl(prevItem.nativeElement);
        break;
      }
    }
    if(!found && elArr.length > 0){
      this.scrollToEl(elArr[0].nativeElement);
    }
  }

  scrollRight(){
    let trueFlag = false;
    let found = false;
    let elArr = this.tabEls.toArray();
    for(let item of elArr){
      let isElVisible = this.isScrolledIntoView(item.nativeElement);
      if(isElVisible){
        trueFlag = true;
      }
      if(!isElVisible && trueFlag){
        //this.isScrolledIntoView(item.nativeElement,true)
        found = true;
        //scroll to this item
        this.scrollToEl(item.nativeElement);
        break;
      }
    }
    if(!found && elArr.length > 0){
      this.scrollToEl(elArr[elArr.length-1].nativeElement)
    }
    this.tabsContent.nativeElement.focus();
  } 

  isScrolledIntoView(el,debug=false) {
    var rect = el.getBoundingClientRect();
    var elemLeft = rect.left;
    var elemRight = rect.right;
    var parentRect = el.parentNode.getBoundingClientRect();
    var parentElemLeft = parentRect.left-1;
    var parentElemRight = parentRect.right+1;
    if(debug){
      console.log(el, elemLeft,elemRight, parentElemLeft, parentElemRight)
    }
    // Only completely visible elements return true:
    var isVisible = (elemLeft >= parentElemLeft) && (elemRight <= parentElemRight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }

  scrollToEl(el){
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }
}
