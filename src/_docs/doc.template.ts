import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
	selector: 'doc-template',
  template: `
<div [innerHTML]="markdown"></div>
<sam-accordion [bordered]="true">
	<sam-accordion-section headerText="Guidance" name="guidance">
		<div [innerHTML]="guidance"></div>
	</sam-accordion-section>
	<sam-accordion-section headerText="Design" name="design">
		<div [innerHTML]="design"></div>
	</sam-accordion-section>
	<ng-container *ngIf="implementation">
		<sam-accordion-section headerText="Implementation" name="implementation">
			<div [innerHTML]="implementation"></div>
		</sam-accordion-section>
	</ng-container>
</sam-accordion>
<h2>Example</h2>
<div><ng-content></ng-content></div>
<hr/>
<sam-accordion [bordered]="true">
<sam-accordion-section headerText="Code Example" name="example">
  <pre><code>{{example}}</code></pre>
</sam-accordion-section>
</sam-accordion>
<div [innerHTML]="typedoc"></div>
`
})
export class DocTemplateComponent implements OnInit {
	@Input() markdown;
	@Input() example;
	@Input() typedoc;
	@Input() guidance;
	@Input() design;
	@Input() implementation;
 	constructor(){}
	public ngOnInit() {}

}