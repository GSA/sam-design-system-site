import { Component, OnInit } from '@angular/core';
import { BaseExampleComponent } from './baseexample.component';
import { Http } from '@angular/http';
import { MarkdownService } from 'app/services/markdown/markdown.service';
import { DocumentationService } from 'app/services/documentation.service';
import { ActivatedRoute } from '@angular/router';

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

    ngOnInit() {
        const ctx = this;
        this.typedoc_target = this.route.snapshot.data.componentName;

        if (this.typedoc_target) {
            this.service.getComponentProperties(this.typedoc_target)
            .subscribe(
                (data) => { this.setupTypedocContent(data); },
                (error) => { throw new Error(error); }
            );
        }

        // todo: see if we can find out if we should make the call or not
        this._http.get('/assets/' + this.route.snapshot.data.path + '/component-example.html').subscribe((res) => {
            // console.log(res.text());
            ctx.example = res.text();
        });
        this._http.get('/assets/' + this.route.snapshot.data.path + '/component-example.ts').subscribe((res) => {
            // console.log(res.text());
            ctx.codeExample = res.text();
        });
        this._http.get('/assets/' + this.route.snapshot.data.path + '/documentation.md').subscribe((res) => {
            // console.log(res.text());
            ctx.markdown = res.text();
        });
        this._http.get('/assets/' + this.route.snapshot.data.path + '/design.md').subscribe((res) => {
            // console.log(res.text());
            ctx.design = res.text();
        });
        this._http.get('/assets/' + this.route.snapshot.data.path + '/guidance.md').subscribe((res) => {
            // console.log(res.text());
            ctx.guidance = res.text();
        });

        
    }

    constructor(
        public _http: Http,
        public service: DocumentationService,
        public mdService: MarkdownService,
        public route: ActivatedRoute) {

        super(_http, service, mdService);
    }
}
