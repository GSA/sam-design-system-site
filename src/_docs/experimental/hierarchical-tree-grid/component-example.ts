import {
  Component, OnInit, ViewChild, AfterViewInit
} from '@angular/core';
import { HierarchicalDataService } from '../../services/hierarchical.service';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { OptionsType } from '@gsa-sam/sam-ui-elements/src/ui-kit/types';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'doc-sam-tree-grid',
  templateUrl: './component-example.html'
})
export class SamHierarchicalTreeGridComponentExampleComponent implements OnInit {
  data: any[];
  result: any = {};
  selectedAgency: number;
  options = [];

  public tableData$: Observable<any>;
  public selectedAgency$ = new BehaviorSubject<any>(null);
  public agencyRowChange$ = new BehaviorSubject<any>(null);

  constructor(public service: HierarchicalDataService) {}

  configurations: any = {
    displayedColumns: ['id', 'name', 'subtext'],
  };

  public ngOnInit() {
    this.tableData$ = this.selectedAgency$.pipe(
      switchMap(agencyId => this.service.getHiercarchicalById(agencyId)),
    );

    this.selectedAgency$.subscribe(
      // TODO: Create smart default or handle null value in service or document that null
      // and undefined must be handled by service
      id => this.setOptionsData(this.service.getBreadcrumbOptions(id || '232'))
    );
  }

  onSelectedItem(item) {
    this.result = item;
  }

  setOptionsData (data: any[]): void {
    this.options = this.getOptionsData(data);
  }

  getOptionsData(data: any[]): OptionsType[] {
    const temp = [];
    if (!data || data.length === 0) {
      return temp;
    } else {
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
  }
}
