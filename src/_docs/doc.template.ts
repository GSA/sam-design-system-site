import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import Prism from 'prismjs';

@Component({
	selector: 'doc-template',
  template: `
  <div [innerHTML]="markdown"></div>
  
  <sam-accordion [bordered]="true">
    <sam-accordion-section *ngIf="guidance" headerText="Guidance" name="guidance">
      <div [innerHTML]="guidance"></div>
    </sam-accordion-section>
    <sam-accordion-section *ngIf="design" headerText="Design" name="design">
      <div [innerHTML]="design"></div>
    </sam-accordion-section>
    <ng-container *ngIf="implementation">
      <sam-accordion-section headerText="Implementation" name="implementation">
        <div [innerHTML]="implementation"></div>
      </sam-accordion-section>
    </ng-container>
  </sam-accordion>
  
  <h2 class="sam-ui header">Examples</h2>
  
  <!--Refactor Tabs-->
  <div class="sam-ui top attached tabular small menu">
    <a class="item" (click)="tabSelected = !tabSelected; panelSelected = true;" [class.active]="tabSelected">Result</a>
    <a class="item" (click)="tabSelected = !tabSelected; panelSelected = false;" [class.active]="!tabSelected">HTML</a>
  </div>
  <div class="sam-ui bottom attached segment">
    <div [hidden]="!panelSelected">
      <ng-content></ng-content>
    </div>
    <ng-container *ngIf="!panelSelected">
      <pre class="language-html"><code class="language-html" [innerHTML]="example"></code></pre>
    </ng-container>
  </div>
  
  <div class="sam-ui hidden section divider"></div>
  
  <div [innerHTML]="typedoc"></div>
  
  <div class="sam-ui hidden section divider"></div>
`
})
export class DocTemplateComponent implements OnInit {
	@Input() markdown;
	@Input() example;
	@Input() typedoc;
	@Input() guidance;
	@Input() design;
	@Input() implementation;
  
  tabSelected = true;
  panelSelected = true;
  
 	constructor(){}
  
	public ngOnInit() {
    this.example = Prism.highlight(this.example, Prism.languages.html);
  }
  
}