import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ViewChild,
  Pipe,
  PipeTransform,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';
import * as marked from 'marked';
import txt from 'raw-loader!./overview.md';

import { DomSanitizer } from '@angular/platform-browser'

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: 'home',
  template: `
  <div [innerHTML]="markdown | safeHtml"></div>`
})
export class HomeComponent implements OnInit {
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  public componentExampleCode = `<div>Sample code block here</div>`;
  public markdown = '<h1>Placeholder Header</h1>';
  public sampleModel = "testmodelvalue";
  // TypeScript public modifiers
  constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    //console.log();
    this.markdown = marked(txt);
    //console.log(this.markdown);
    this.onAnchorClick();
  }

  onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
    
      const element = document.querySelector ( "#" + f )
      if ( element ) element.scrollIntoView ( element )
    });
  }
}
