
import {
  Component, OnInit, ViewChild
} from '@angular/core';
import { HierarchicalDataService } from '../../services/hierarchical.service';
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs-compat';

import { MdPaginator } from '@angular/material';
import { SamSortDirective } from '@gsa-sam/sam-ui-elements';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'doc-sam-tree-grid',
  templateUrl: './component-example.html'
})
export class SamHierarchicalTreeGridComponentExampleComponent implements OnInit {
  @ViewChild(MdPaginator) _paginator: MdPaginator;
  @ViewChild(SamSortDirective) _sort: SamSortDirective;
  data: any[];
  result: any = {};

  constructor(public service: HierarchicalDataService) {
    this.service.getDataByText(null).subscribe(
      (res) => {
        this.data = res;
      });
  }

  configurations: any = {
    displayedColumns: ['id', 'name', 'subtext'],
  };

  public ngOnInit() {
  }

  onSelectedItem(item) {
    this.result = item;
  }

}
