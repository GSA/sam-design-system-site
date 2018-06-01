import {
    Component,
    Directive,
    ContentChild,
    AfterContentInit,
    HostBinding
  } from '@angular/core';
  
@Directive({
    selector: '[sam-title-section]'
})
export class SamDatabankTitleSectionDirective {
    @HostBinding('class.sam') samClass = true;
    @HostBinding('class.heading') headingClass = true;
}