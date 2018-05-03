import { Directive, Input } from '@angular/core';
import { CdkAccordion, MdAccordionDisplayMode } from '@angular/material';

@Directive({
  selector: '[samAccordion]'
})
export class SamAccordionDirective extends CdkAccordion {
  @Input() displayMode: MdAccordionDisplayMode = 'flat';
}
