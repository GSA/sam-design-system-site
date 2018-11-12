
import {
  Component, OnInit, forwardRef
} from '@angular/core';
import {
  FormBuilder
} from '@angular/forms';
import {

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
    }
  ]
})
export class SamPaginationNextComponentExampleComponent implements OnInit {


  constructor(public fb: FormBuilder) {}

  ngOnInit() {
   
  }
}
