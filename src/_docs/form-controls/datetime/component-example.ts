import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
	selector: 'doc-datetime',
  template: `
<doc-template [markdown]="markdown" [example]="example">
<doc-accordion-dummy [sampleInput]="'456'"></doc-accordion-dummy>
</doc-template>
`
})
export class DateTimeExampleComponent implements OnInit {
	markdown = "";
	example = `<doc-accordion-dummy [sampleInput]="'456'"></doc-accordion-dummy>`;
	constructor(){
	}
	public ngOnInit() {
		this.markdown =  require("html-loader!markdown-loader!./documentation.md");
	}

}