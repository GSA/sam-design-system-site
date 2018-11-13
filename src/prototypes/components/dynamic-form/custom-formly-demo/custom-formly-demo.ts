import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import {AbstractSamFormly} from '@gsa-sam/sam-ui-elements/src/formly/index';
import { AutocompleteService, SamAutocompleteComponent } from '@gsa-sam/sam-ui-elements';
/* tslint:disable */
import { Observable } from 'rxjs';
/* tslint:enable */


export class DemoService implements AutocompleteService {
  setFetchMethod () {}

  fetch () {
    const tmp = [];

    while (tmp.length < 10) {
      const rand = Math.floor(Math.random() * 10) + 1;
      tmp.push({ key: rand, value: rand });
    }

    return Observable.of(tmp);
  }
}

@Component({
  template: `
  <sam-autocomplete [formControl]="formControl"></sam-autocomplete>`,
  providers: [
    {
      provide: AutocompleteService,
      useClass: DemoService
    }
  ]
})
export class CustomFormlyDemoComponent extends AbstractSamFormly {
  @ViewChild(SamAutocompleteComponent)
  public template: SamAutocompleteComponent;

  constructor (public cdr: ChangeDetectorRef) {
    super();
  }
}
