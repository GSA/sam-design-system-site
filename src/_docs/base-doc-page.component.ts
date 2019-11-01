import { Component, OnInit } from '@angular/core';
import { BaseExampleComponent } from './baseexample.component';
import { HttpClient } from '@angular/common/http';
import { MarkdownService } from 'app/services/markdown/markdown.service';
import { DocumentationService } from 'app/services/documentation.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'environment';

@Component({
  selector: 'doc-base-page',
  template: `
<doc-template-next
    [markdown]="markdown"
    [codeExample]="codeExample"
    [example]="example"
    [design]="design"
    [guidance]="guidance"
    [implementation]="implementation"
    [typedoc]="typedoc_content">
  <router-outlet></router-outlet>
</doc-template-next>`,
})
export class BaseDocPageComponent extends BaseExampleComponent implements OnInit {
    implementation;
    ngOnInit() {
        const ctx = this;
        // console.log(this.route.snapshot.data.sections);
        this.typedoc_target = this.route.snapshot.data.componentName;
        if (this.typedoc_target) {
            this.service.getComponentProperties(this.typedoc_target)
            .subscribe(
                (data) => { this.setupTypedocContent(data); },
                (error) => { throw new Error(error); }
            );
        }

        // todo: see if we can find out if we should make the call or not
        if (this.route.snapshot.data.sections.indexOf('component-example.html') !== -1) {
            this._http.get(this.getAssetURI('/component-example.html'), { responseType: 'text' as 'json'})
                .subscribe((res: any) => {
                    // console.log(res.text());
                    ctx.example = res;
                });
        }
        if (this.route.snapshot.data.sections.indexOf('component-example.ts') !== -1) {
            this._http.get(this.getAssetURI('component-example.ts'), { responseType: 'text' as 'json'}).subscribe((res: any) => {
                // console.log(res.text());
                ctx.codeExample = res;
            });
        }
        if (this.route.snapshot.data.sections.indexOf('documentation.md') !== -1) {
            this._http.get(this.getAssetURI('documentation.md'), { responseType: 'text' as 'json'}).subscribe((res: any) => {
                // console.log(res.text());
                ctx.markdown = res;
            });
        }
        if (this.route.snapshot.data.sections.indexOf('design.md') !== -1) {
            this._http.get(this.getAssetURI('design.md'), { responseType: 'text' as 'json'}).subscribe((res: any) => {
                // console.log(res.text());
                ctx.design = res;
            });
        }
        if (this.route.snapshot.data.sections.indexOf('guidance.md') !== -1) {
            this._http.get(this.getAssetURI('guidance.md'), { responseType: 'text' as 'json'}).subscribe((res: any) => {
                // console.log(res.text());
                ctx.guidance = res;
            });
        }
        if (this.route.snapshot.data.sections.indexOf('implementation.md') !== -1) {
            this._http.get(this.getAssetURI('implementation.md'), { responseType: 'text' as 'json'}).subscribe((res: any) => {
                // console.log(res.text());
                ctx.implementation = res;
            });
        }
    }

    constructor(
        public _http: HttpClient,
        public service: DocumentationService,
        public mdService: MarkdownService,
        public route: ActivatedRoute) {

        super(_http, service, mdService);
    }

    public getAssetURI (file: string): string {
      return `./${this.route.snapshot.data.path}/${file}`;
    }

}
