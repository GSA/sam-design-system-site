import {
  Component,
  ContentChild,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'sam-action-bar',
  template: '<ng-content></ng-content>'
})
export class SamActionBarComponent {}

@Component({
  selector: 'sam-aside',
  template: '<ng-content></ng-content>'
})
export class SamAsideComponent {}

@Component({
  selector: 'sam-main',
  template: '<ng-content></ng-content>'
})
export class SamMainComponent {}

@Component({
  selector: 'sam-layout',
  template: '<ng-content></ng-content>'
})
export class SamLayoutComponent implements AfterContentInit {
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
