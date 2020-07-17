import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { MarkdownService } from '../app/services/markdown/markdown.service';

///// COMP
@Component({
  selector: 'doc-placeholder-example',
  template: `
    <doc-template [markdown]="content" [typedoc]="'static-page'"></doc-template>
  `,
})
export class StaticPageComponent implements OnInit {
  public content;
  public defaultContent = `<h1>No Documentation Yet</h1><p>Coming soon</p>`;
  public base = '_docs/components/spinner/';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public mdService: MarkdownService
  ) {}
  public ngOnInit() {
    this.route.data.subscribe((v: any) => {
      const fileName = v.markdownfile
        .split('/')
        .filter((section: string) => section !== 'src')
        .join('/');

      this.mdService
        .get(fileName)
        .pipe(
          catchError((err) => {
            this.content = this.defaultContent;
            return of(err);
          }),
          map((res) => res)
        )
        .subscribe(
          (res) => (this.content = res.error.text),
          (err) => (this.content = this.defaultContent)
        );
    });
  }
}
