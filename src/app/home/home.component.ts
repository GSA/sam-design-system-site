import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  public componentExampleCode = `<div>Sample code block here</div>`;
  public markdown = '<h1>Placeholder Header</h1>';
  public sampleModel = "testmodelvalue";
  // TypeScript public modifiers
  constructor() {}

  public ngOnInit() {

  }
}
