import { Directive, Input } from "@angular/core";
import { CdkAccordion, MdAccordionDisplayMode } from "@angular/material";

@Directive({
  selector: 'sam-accordion-next'
})
export class SamAccordion extends CdkAccordion {
  @Input() displayMode: MdAccordionDisplayMode = 'flat';
}