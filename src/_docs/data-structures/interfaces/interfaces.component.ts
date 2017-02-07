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
  selector: 'doc-interfaces',
  templateUrl: 'interfaces.template.html'
})
export class InterfacesComponent {
  public interfaces: any[];

  constructor(public service: DocumentationService) {
    this.service.getInterfaces()
    .subscribe(
      (data) => { this.interfaces = data; },
      (error) => { throw new Error(error); }
    );
  }
}
