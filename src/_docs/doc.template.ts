import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
	selector: 'doc-template',
  template: `
<div [innerHTML]="markdown"></div>
<h2>Example</h2>
<div><ng-content></ng-content></div>
<hr/>
<samAccordion [bordered]="true">
<samAccordionSection headerText="Code Example" name="aria-friendly-section-name">
  <pre><code>{{example}}</code></pre>
</samAccordionSection>
</samAccordion>
<div [innerHTML]="typedoc"></div>
`
})
export class DocTemplateComponent implements OnInit {
	@Input() markdown;
	@Input() example;
	@Input() typedoc;
	constructor(){}
	public ngOnInit() {}

}