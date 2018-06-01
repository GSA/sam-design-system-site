import {
    Component,
    ContentChild,
    AfterContentInit,
    HostBinding
  } from '@angular/core';
  
  // there's already a layout component
  @Component({
    selector: 'sam-filters-wrapper',
    template: '<ng-content></ng-content>'
  })
  export class SamFiltersWrapperComponent implements AfterContentInit {

    public ngAfterContentInit () {

    }
  }