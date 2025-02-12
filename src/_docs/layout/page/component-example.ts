
import {
  Component, OnInit, forwardRef
} from '@angular/core';
import {
  UntypedFormBuilder
} from '@angular/forms';
import {

  DataStore,
  layoutStore
} from '@gsa-sam/sam-ui-elements';

@Component({
  selector: 'doc-sam-page',
  templateUrl: './component-example.html',
  providers: [
    {
      provide: DataStore,
      useValue: layoutStore
    }
  ]
})
export class SamPageComponentExampleComponent implements OnInit {


  constructor(public fb: UntypedFormBuilder) { }

  public intro: string = 'intro test';

  public title: string = 'title test';
  ngOnInit() {

  }
}
