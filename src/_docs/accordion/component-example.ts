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
<doc-template [markdown]="markdown" [example]="example">
<doc-accordion-dummy [sampleInput]="'789'"></doc-accordion-dummy>
</doc-template>
`
})
export class AccordionExampleComponent implements OnInit {
	markdown = "";
	example = `<doc-accordion-dummy [sampleInput]="'789'"></doc-accordion-dummy>`;
	constructor(){
	}
	public ngOnInit() {
		this.markdown =  require("html-loader!markdown-loader!./documentation.md");
	}

}