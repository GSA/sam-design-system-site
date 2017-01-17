import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
	selector: 'doc-template',
  template: `
<div [innerHTML]="markdown"></div>
<div><ng-content></ng-content></div>
<pre><code>{{example}}</code></pre>
`
})
export class DocTemplateComponent implements OnInit {
	@Input() markdown;
	@Input() example;
	constructor(){}
	public ngOnInit() {}

}