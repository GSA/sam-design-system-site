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
import { BaseExampleComponent } from '../../baseexample.component';
import { DocumentationService } from '../../../app/services/documentation.service';
import * as markdown from 'html-loader!markdown-loader!./documentation.md';

@Component({
  selector: 'doc-types',
  templateUrl: 'types.template.html'
})
export class TypesComponent {
  public types: any[];

  constructor(public service: DocumentationService) {
    this.service.getTypes()
    .subscribe(
      (data) => { this.types = data; },
      (error) => { throw new Error(error); }
    );
  }
}
