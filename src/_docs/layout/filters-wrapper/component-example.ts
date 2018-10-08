
import {
  Component, OnInit
} from '@angular/core';
import {
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'doc-sam-filters-wrapper',
  templateUrl: './component-example.html'
})
export class SamFiltersWrapperComponentExampleComponent implements OnInit {
  formGroup;
  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      test: ''
    });
  }
}

