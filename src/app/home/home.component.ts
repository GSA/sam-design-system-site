import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { DummyComponent } from './dummy.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
//import {AccordionExampleComponent} from '../../_docs/accordion/component-example';
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  entryComponents: [DummyComponent],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;
  public compMap = {
    test: DummyComponent
  };

  public componentExampleCode = `<div>Sample code block here</div>`;
  public markdown = '<h1>Placeholder Header</h1>';
  public sampleModel = "testmodelvalue";
  // TypeScript public modifiers
  constructor(private route: ActivatedRoute, private componentFactoryResolver: ComponentFactoryResolver) {}

  public ngOnInit() {

  }

  public submitState(value: string) {

  }
}
