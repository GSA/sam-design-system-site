import {
  Component, OnInit, ViewChild
} from '@angular/core';
import { HierarchicalDataService } from '../../services/hierarchical.service';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
@Component({
  selector: 'doc-sam-tree-grid',
  templateUrl: './component-example.html'
})
export class SamHierarchicalTreeGridComponentExampleComponent implements OnInit {
  data: any[];
  result: any = {};
  constructor(public service: HierarchicalDataService) {
    this.service.getHiercarchicalById(null).subscribe(
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
    // this.result = {};
    this.result = item;
  }
}
