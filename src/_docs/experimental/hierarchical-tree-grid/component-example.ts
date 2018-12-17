import {
  Component, OnInit, ViewChild, AfterViewInit
} from '@angular/core';
import { HierarchicalDataService } from '../../services/hierarchical.service';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { OptionsType } from '@gsa-sam/sam-ui-elements/src/ui-kit/types';
@Component({
  selector: 'doc-sam-tree-grid',
  templateUrl: './component-example.html'
})
export class SamHierarchicalTreeGridComponentExampleComponent implements OnInit, AfterViewInit {
  data: any[];
  result: any = {};
  selectedAgency: number;
  selectConfig = {
    options: []
  };

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

  public ngAfterViewInit() {
    this.selectConfig.options = this.getOptionsData(this.data);
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
        item['value'] = ele.id;
        item['label'] = ele.subtext;
        temp.push(item);
      }
    });
    return temp;
  }
  onAgencySelect(agecySelectedItem) {
    this.selectedAgency = agecySelectedItem;
    this.getData('2');
  }
  getData(id: string | null): void {
    this.data = [];
    this.service.getHiercarchicalById(id).subscribe(
      (res) => {
        this.data = res;
        this.selectConfig.options = this.getOptionsData(this.data);
      });
  }
}
