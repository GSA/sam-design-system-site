import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
 } from '@angular/core';


 import { SamSortDirective } from '@gsa-sam/sam-ui-elements';
 import { SamPaginationComponent } from '@gsa-sam/sam-ui-elements';
 import { fromEvent } from 'rxjs/observable/fromEvent';
 import { ExampleDataSource, ExampleDatabase } from './data-source';

@Component({
  selector: 'doc-sam-datatable',
  templateUrl: './component-example.html',
  styleUrls: ['./component-example.scss']
})
export class SamDataTableComponentExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
