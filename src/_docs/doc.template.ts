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
  
  <sam-tabs>
    <sam-tab tabTitle="Documentation" active="true">
      <h2 class="sam-ui header">Examples</h2>
      
      <!--Refactor Tabs-->
      <div class="sam-ui top attached tabular small menu">
        <a class="item" (click)="tabSelected = !tabSelected; panelSelected = true;" [class.active]="tabSelected">Result</a>
        <a class="item" (click)="tabSelected = !tabSelected; panelSelected = false;" [class.active]="!tabSelected">HTML</a>
      </div>
      <div class="sam-ui bottom attached clearing segment">
        <div [hidden]="!panelSelected">
          <ng-content></ng-content>
        </div>
        <ng-container *ngIf="!panelSelected">
          <pre class="language-html"><code class="language-html" [innerHTML]="example"></code></pre>
        </ng-container>
      </div>
      
      <div class="sam-ui hidden section divider"></div>
      
      <div [innerHTML]="typedoc"></div>
    </sam-tab>
    <sam-tab tabTitle="Guidance" *ngIf="guidance">
      <div [innerHTML]="guidance"></div>
    </sam-tab>
    <sam-tab tabTitle="Design" *ngIf="design">
      <div [innerHTML]="design"></div>
    </sam-tab>
    <sam-tab tabTitle="Implementation" *ngIf="implementation">
      <div [innerHTML]="implementation"></div>
    </sam-tab>
  </sam-tabs>
  
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