import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ViewChild,
  ViewRef,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

// tabs/spacing matters for code example block
const code_example = `<div class="usa-width-one-whole">
  <h3>Accordions without border</h3>
  <sam-accordion>
    <sam-accordion-section headerText="Section title 1" name="aria-friendly-section-name">
      <a href>A link</a>
    </sam-accordion-section>
    <sam-accordion-section headerText="Section title 2" name="aria-friendly-section-name-2">
      <a href>A second link</a>
    </sam-accordion-section>
  </sam-accordion>
</div>
<div class="usa-width-one-whole">
  <h3>Accordions with border, and initial selected tab</h3>
  <sam-accordion [expandIndex]="1" [bordered]="true">
    <sam-accordion-section headerText="Section title 1" name="aria-friendly-section-name">
      <a href>A link</a>
    </sam-accordion-section>
    <sam-accordion-section headerText="Section title 2" name="aria-friendly-section-name-2">
      <a href>A second link</a>
    </sam-accordion-section>
  </sam-accordion>
</div>`;

@Component({
  selector: 'doc-accordion',
  template: `
<doc-template [markdown]="markdown" [example]="example" [guidance]="guidance" [typedoc]="typedoc_content">
` + code_example + `
</doc-template>
`
})
export class AccordionExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = 'SamAccordionComponent';
  typedoc_content = '';

  example = code_example;

  public base = '_docs/components/accordion/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
