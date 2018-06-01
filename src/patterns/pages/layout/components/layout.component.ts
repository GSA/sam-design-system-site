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
import { SamAsideContainerComponent, SamAsideComponent } from './aside';

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

  @ViewChild(SamAsideContainerComponent)
  public sidenavContainer: SamAsideContainerComponent;

  @ContentChild(SamActionBarComponent)
  public actions: SamActionBarComponent;

  @ContentChildren(SamAsideComponent, { descendants: true })
  public sidenavs: QueryList<SamAsideComponent>;

  @ContentChild(SamMainComponent)
  public main: SamMainComponent;

  public ngAfterContentInit () {
    /**
     * Content doesn't get projected "through" multiple
     * <ng-content> tags, so anything inside ng-content
     * is registered as a child of SamLayoutComponent.
     *
     * However, we need the SamAside components projected
     * into the SamAsideContainer component.
     *
     * To work around this, we have SamLayoutComponent
     * manually register each SamAside content child with
     * the aside container component.
     */
    this.sidenavs.forEach(sidenav => {
      this.sidenavContainer.registerSidenav(sidenav);
    });

    if (!this.main) {
      throw new Error('No SamMainComponent provided');
    }
  }
}
