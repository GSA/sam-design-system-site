import {
  Component,
  ContentChild,
  AfterContentInit,
  HostBinding,
  ContentChildren,
  QueryList,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  Renderer2,
  forwardRef,
  ViewChild
} from '@angular/core';
import { SamActionBarComponent } from './actionbar.component';
import { SamMainComponent } from './main.component';

@Component({
  selector: 'sam-aside',
  template: '<ng-content></ng-content>'
})
export class SamAsideComponent {
  @HostBinding('class') public classes = 'sam-aside';
  @Input()
  public get opened () {
    return this._opened;
  }

  public set opened (v: boolean) {
    this.toggle(!!v);
  }

  @Output() public onOpen = new EventEmitter<void>();
  @Output() public onClose = new EventEmitter<void>();

  private _opened: boolean;

  public open (): void {
    return this.toggle(true);
  }

  public close (): void {
    return this.toggle(false);
  }

  public toggle (isOpen: boolean = !this.opened): void {
    if (isOpen === this._opened) {
      return;
    } else {
      this._opened = isOpen;

      if (this._opened === true) {
        this.onOpen.emit();
      } else {
        this.onClose.emit();
      }
    }
  }
}

@Component({
  selector: 'sam-aside-container',
  template: `
  <div>
    <ng-content></ng-content>
  </div>
  `
})
export class SamAsideContainerComponent
   {

  @HostBinding('class')
  public classes = 'sam-aside-container';

  @ContentChildren(forwardRef(() => SamAsideComponent), { descendants: true})
  public sidenavs;
  
  constructor (
    private _element: ElementRef,
    private _renderer: Renderer2) {}

  public _registerSidenav (sidenav: SamAsideComponent) {
    if (!sidenav) {
      return;
    } else {

      sidenav.onOpen.subscribe(
        () => this._setContainerClass(true)
      );

      sidenav.onClose.subscribe(
        () => this._setContainerClass(false)
      );
    }
  }

  private _setContainerClass (isAdd: boolean) {
    console.log('Called!', isAdd);
    if (isAdd) {
      this._renderer.addClass(
        this._element.nativeElement,
        'aside-opened'
      );
    } else {
      this._renderer.removeClass(
        this._element.nativeElement,
        'aside-opened'
      );
    }
  }

}

@Component({
  selector: 'sam-layout-b',
  template: `
    <sam-aside-container>
      <ng-content></ng-content>
    </sam-aside-container>
  `
})
export class SamLayoutComponent implements AfterContentInit {
  @HostBinding('class.container') container: boolean = true;

  @ContentChild(SamActionBarComponent)
  public actions: SamActionBarComponent;

  @ViewChild(SamAsideContainerComponent)
  public sidenavContainer: SamAsideContainerComponent;

  @ContentChildren(SamAsideComponent, { descendants: true })
  public sidenavs: QueryList<SamAsideComponent>;

  @ContentChild(SamMainComponent)
  public main: SamMainComponent;

  public ngAfterContentInit () {
    this.sidenavContainer.sidenavs = this.sidenavs;
    this.sidenavs.forEach(sidenav =>{
      this.sidenavContainer._registerSidenav(sidenav);
    });
    if (!this.main) {
      throw new Error('No SamMainComponent provided');
    }
  }
}
