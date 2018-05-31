import {
    Component,
    ContentChild,
    AfterContentInit,
    HostBinding
  } from '@angular/core';
  import { SamActionBarComponent } from './actionbar.component';
  import { SamAsideComponent } from './aside.component';
  import { SamMainComponent } from './main.component';
  
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
  
    public ngAfterContentInit () {
      if(!this.main){
        throw new Error('No SamMainComponent provided');
      }
    }
  }