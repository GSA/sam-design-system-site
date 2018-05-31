import {
  Component,
  ContentChild,
  AfterContentInit,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'sam-toolbar',
  template: `
<div class="page-toolbar">
  <a>
    <sam-icon name="slider-h"></sam-icon>
    Toggle filters
  </a>
  <div class="page-toolbar-menu">
    <a>
      <i class="fa fa-download" aria-hidden="true"></i>
      Download
    </a>
    <a>
      <i class="fa fa-share-alt" aria-hidden="true"></i>
      Share
    </a>
    <a>
      <i class="fa fa-cloud" aria-hidden="true"></i>
      Save Criteria
    </a>
  </div>
</div>  
`
})
export class SamToolbarComponent {}

@Component({
  selector: 'sam-action-bar',
  template: '<ng-content></ng-content>'
})
export class SamActionBarComponent {}

@Component({
  selector: 'sam-aside',
  template: '<ng-content></ng-content>'
})
export class SamAsideComponent {
  @HostBinding('class.sidebar') container: boolean = true;
}

@Component({
  selector: 'sam-main',
  template: '<ng-content></ng-content>'
})
export class SamMainComponent {}

// there's already a layout component
@Component({
  selector: 'sam-layout-b',
  template: '<ng-content></ng-content>'
})
export class SamLayoutComponent implements AfterContentInit {
  @HostBinding('class.container') container: boolean = true;
  @ContentChild(SamActionBarComponent)
  public actions: SamActionBarComponent;

  @ContentChild(SamAsideComponent)
  public aside: SamAsideComponent;

  @ContentChild(SamMainComponent)
  public main: SamMainComponent;

  public ngAfterContentInit () {}
}

@Component({
  selector: 'sam-layout-demo-component',
  templateUrl: './layout.template.html'
})
export class SamLayoutDemoComponent {}
