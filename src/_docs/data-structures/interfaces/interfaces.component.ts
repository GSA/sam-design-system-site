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

@Component({
  selector: 'sam-doc-interfaces',
  templateUrl: 'interfaces.template.html'
})
export class InterfacesComponent {
  public interfaces: any[];

  constructor(public service: DocumentationService) {
    this.service.getInterfaces()
    .subscribe(
      (data) => {
        for (const idx in data) {
          if (data[idx] && data[idx]['children']) {
            data[idx]['children'] = data[idx]['children'].map(function(obj) {
              if (obj.type.types) {
                obj.type.types = obj.type.types.map(function(el) {
                  if (el.name) {
                    return el.name;
                  } else if (el.value) {
                    return '"' + el.value + '"';
                  }
                }).join(',');
              }
              return obj;
            });
          }
        }
        this.interfaces = data;
      },
      (error) => { throw new Error(error); }
    );
  }
}
