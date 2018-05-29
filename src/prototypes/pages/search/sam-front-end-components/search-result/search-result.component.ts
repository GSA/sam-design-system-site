// Disabling lint as this is 3rd party code for demo only
/* tslint:disable */
import {
  Component,
  HostBinding,
  ContentChild,
  forwardRef,
  AfterContentInit,
  AfterContentChecked,
  ElementRef,
  Renderer2,
  Directive,
  ViewChild,
  AfterViewChecked,
  Input
} from '@angular/core';

@Component({
  selector: 'sam-search-result',
  template: `<ng-content></ng-content>`,
})
export class SamSearchResultComponent
  implements AfterContentChecked {

  @ContentChild(forwardRef(() => SamSearchResultMainComponent))
    public main: SamSearchResultMainComponent;
  @ContentChild(forwardRef(() => SamSearchResultAsideComponent))
    public aside: SamSearchResultAsideComponent;

  @HostBinding('class') public classes = 'search-result';

  public ngAfterContentChecked () {
    this.classes = this._setClasses();
  }

  private _setClasses (): string {
    const classes = ['search-result'];

    if (this.aside) {
      classes.push('with', 'aside');
    }
    return classes.join(' ');
  }
}

@Component({
  selector: 'sam-search-result-main',
  template: `<ng-content></ng-content>`
})
export class SamSearchResultMainComponent {
  @HostBinding('class') public classes = 'main';
}

@Component({
  selector: 'sam-search-result-aside',
  template: `<ng-content></ng-content>`
})
export class SamSearchResultAsideComponent {
  @HostBinding('class') public classes = 'aside';

}

@Component({
  selector: 'sam-search-result-header',
  template: `
    <ng-content select="meta-right"></ng-content>
    <ng-content></ng-content>
  `
})
export class SamSearchResultHeaderComponent {
  @HostBinding('class') public classes = 'header';
}

/* tslint:disable */
@Directive({
  selector: '[meta]',
})
export class SamSearchResultHeaderMetaRight {
  @HostBinding('class') public classes = 'meta';
}
/* tslint:enable */

@Component({
  selector: 'sam-search-result-body',
  template: `<ng-content></ng-content>`
})
export class SamSearchResultBodyComponent {
  @HostBinding('class') public classes = 'body';
}
