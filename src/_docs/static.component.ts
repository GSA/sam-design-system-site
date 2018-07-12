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
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { MarkdownService } from '../app/services/markdown/markdown.service';

///// COMP
@Component({
  selector: 'doc-placeholder-example',
  template: `
    <doc-template [markdown]="content" [typedoc]="'static-page'"></doc-template>
  `
})
export class StaticPageComponent implements OnInit {
  public content;
  public defaultContent = `<h1>No Documentation Yet</h1><p>Coming soon</p>`;
  public base = '_docs/components/spinner/';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public mdService: MarkdownService) {

  }
  public ngOnInit() {
    this.route
      .data
      .subscribe(
        (v: any) => {

          const fileName = v.markdownfile
            .split('/')
            .filter((section: string) => section !== 'src')
            .join('/');

          this.mdService.get(fileName.replace(/^_/g,''))
            .catch((err) => {
              this.content = this.defaultContent;
              return Observable.of(err);
            })
            .map((res) => res.text())
            .subscribe(
              (res) => this.content = res,
              (err) => this.content = this.defaultContent
            );
        }
      );
  }
}
