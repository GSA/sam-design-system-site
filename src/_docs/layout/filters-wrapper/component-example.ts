
import {
  Component, OnInit, forwardRef
} from '@angular/core';
import {
  FormBuilder
} from '@angular/forms';
import {
  SamPageNextService,
  DataStore,
  layoutStore
} from '@gsa-sam/sam-ui-elements';

@Component({
  selector: 'doc-sam-filters-wrapper',
  templateUrl: './component-example.html',
  providers: [
    {
      provide: DataStore,
      useValue: layoutStore
    },
    forwardRef(() => SamPageNextService)
  ]
})
export class SamFiltersWrapperComponentExampleComponent implements OnInit {
  formGroup;
  message = '';
  submitted = false;

  constructor(public fb: FormBuilder, public service: SamPageNextService) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      testFilter: ''
    });

    this.service.model.properties.filters.valueChanges.subscribe(data => {
      if (data && data.testFilter) {
        this.message = 'form submitted';
        this.submitted = true;
      } else {
        this.message = 'form resetted';
        this.submitted = false;
      }
    });
  }
}
