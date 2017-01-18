import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ViewChild,
  ViewRef,
  TemplateRef,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

/////DUMMY COMP
@Component({
	selector: 'doc-accordion-dummy',
  template: `
<p>I'm a dummy component {{sampleInput}}</p>
`
})
export class AccordionExampleDummyComponent{
	@Input() sampleInput = "123";
}


/////COMP
@Component({
	selector: 'doc-accordion',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
<div class="usa-width-one-whole">
  <h3>Accordions without border</h3>
  <samAccordion>
    <samAccordionSection headerText="Section title 1" name="aria-friendly-section-name">
      <a href>A link</a>
    </samAccordionSection>
    <samAccordionSection headerText="Section title 2" name="aria-friendly-section-name-2">
      <a href>A second link</a>
    </samAccordionSection>
  </samAccordion>
</div>
<div class="usa-width-one-whole">
  <h3>Accordions with border, and initial selected tab</h3>
  <samAccordion [expandIndex]="1" [bordered]="true">
    <samAccordionSection headerText="Section title 1" name="aria-friendly-section-name">
      <a href>A link</a>
    </samAccordionSection>
    <samAccordionSection headerText="Section title 2" name="aria-friendly-section-name-2">
      <a href>A second link</a>
    </samAccordionSection>
  </samAccordion>
</div>
</doc-template>
`
})
export class AccordionExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "accordion.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<div class="usa-width-one-whole">
  <h3>Accordions without border</h3>
  <samAccordion>
    <samAccordionSection headerText="Section title 1" name="aria-friendly-section-name">
      <a href>A link</a>
    </samAccordionSection>
    <samAccordionSection headerText="Section title 2" name="aria-friendly-section-name-2">
      <a href>A second link</a>
    </samAccordionSection>
  </samAccordion>
</div>
<div class="usa-width-one-whole">
  <h3>Accordions with border, and initial selected tab</h3>
  <samAccordion [expandIndex]="1" [bordered]="true">
    <samAccordionSection headerText="Section title 1" name="aria-friendly-section-name">
      <a href>A link</a>
    </samAccordionSection>
    <samAccordionSection headerText="Section title 2" name="aria-friendly-section-name-2">
      <a href>A second link</a>
    </samAccordionSection>
  </samAccordion>
</div>`;
}