import {
  Component, OnInit, ViewChild
} from '@angular/core';
import { HierarchicalDataService } from '../../services/hierarchical.service';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { OptionsType } from '@gsa-sam/sam-ui-elements/src/ui-kit/types';
@Component({
  selector: 'doc-sam-tree-grid',
  templateUrl: './component-example.html'
})
export class SamHierarchicalTreeGridComponentExampleComponent implements OnInit {
  data: any[];
  result: any = {};
  selectConfig = {
    options: []
  };

  constructor(public service: HierarchicalDataService) {
    this.service.getHiercarchicalById(null).subscribe(
      (res) => {
        this.data = res;
        this.selectConfig.options = this.getOptionsData(this.data);
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
  getOptionsData(data: any[]): OptionsType[] {
    const temp = [];
    data.forEach((ele) => {
      if (ele.id) {
        const item = {};
        item['name'] = ele.name;
        item['id'] = ele.id;
        item['value'] = ele.parentId;
        item['label'] = ele.parentId;
        temp.push(item);
      }
    });
    return temp;
  }
}
