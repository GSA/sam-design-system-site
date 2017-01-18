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
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


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
</doc-template>
`
})
export class AccordionExampleComponent implements OnInit {
  typedoc_target = "accordion.component";
  typedoc_content = "";
	markdown = "";
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
</div>`;
	constructor(private _http: Http){
	}
	public ngOnInit() {
		this.markdown =  require("html-loader!markdown-loader!./documentation.md");
    var typedoc_target = this.typedoc_target;
    this._http.get("./docs.json").map((res)=>res.json()).subscribe(res =>{
      var component = res.children.filter(function(val){
        if(val['name'].includes(typedoc_target)){
          return true;
        }
      })[0];
      console.log(component);
      this.setupTypedocContent(component);
    })
	}
  public setupTypedocContent(obj){
    if(obj['children']){
      console.log(obj['children'][0]['comment']['tags']);
      var accordionWrapperDecorators = obj['children'][0]['comment']['tags'];
      this.typedoc_content += `<h2>Component Reference</h2><table><tr><th>Tag</th><th>Comment</th></tr>`;
      for(var idx in accordionWrapperDecorators){
        var decorator = accordionWrapperDecorators[idx];
        this.typedoc_content += `<tr><td>@`+ decorator.tag +`</td><td>` + decorator.text + `</td></tr>`;
      }
      this.typedoc_content += `</table>`;
      //this.typedoc_content = ``;
    }
  }

}