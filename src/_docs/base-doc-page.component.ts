import { Component, OnInit } from '@angular/core';
import { BaseExampleComponent } from './baseexample.component';
import { Http } from '@angular/http';
import { MarkdownService } from 'app/services/markdown/markdown.service';
import { DocumentationService } from 'app/services/documentation.service';

@Component({
  selector: 'doc-base-page',
  template: `
<doc-template-next
    [markdown]="markdown"
    [codeExample]="codeExample"
    [example]="example"
    [design]="design"
    [typedoc]="typedoc_content">
  <router-outlet></router-outlet>
</doc-template-next>`,
})
export class BaseDocPageComponent extends BaseExampleComponent implements OnInit {
    typedoc_target = 'SamBreadcrumbsComponent';

    ngOnInit() {
        const ctx = this;

        // the paths here can probably get passed in via data from route
        this._http.get('/assets/_docs/components/breadcrumbs/component-example.html').subscribe((res) => {
            console.log(res.text());
            ctx.example = res.text();
        });
        this._http.get('/assets/_docs/components/breadcrumbs/component-example.ts').subscribe((res) => {
            console.log(res.text());
            ctx.codeExample = res.text();
        });
        this._http.get('/assets/_docs/components/breadcrumbs/documentation.md').subscribe((res) => {
            console.log(res.text());
            ctx.markdown = res.text();
        });
        this._http.get('/assets/_docs/components/breadcrumbs/design.md').subscribe((res) => {
            console.log(res.text());
            ctx.design = res.text();
        });

        this.service.getComponentProperties(this.typedoc_target)
        .subscribe(
            (data) => { this.setupTypedocContent(data); },
            (error) => { throw new Error(error); }
        );
    }

    constructor(
        public _http: Http,
        public service: DocumentationService,
        public mdService: MarkdownService) {

        super(_http, service, mdService);
    }
}
