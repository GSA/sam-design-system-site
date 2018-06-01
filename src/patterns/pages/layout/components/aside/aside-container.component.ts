import {
  Component,
  HostBinding,
  ContentChildren,
  forwardRef,
  ElementRef,
  Renderer2
} from '@angular/core';

import { SamAsideComponent } from './aside.component';

@Component({
  selector: 'sam-aside-container',
  template: '<ng-content></ng-content>'
})
export class SamAsideContainerComponent {

  @HostBinding('class')
  public classes = 'sidebar sam-aside-container';

  @ContentChildren(
    forwardRef(() => SamAsideComponent),
    { descendants: true}
  )
  public sidenavs;

  constructor (
    private _element: ElementRef,
    private _renderer: Renderer2) {}

  public registerSidenav (sidenav: SamAsideComponent) {
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
