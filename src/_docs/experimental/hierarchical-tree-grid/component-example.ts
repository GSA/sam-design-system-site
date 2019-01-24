import {
  Component,
  OnInit,
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
  public options = [];
  public filterText: string = '';
  public tableData$: Observable<any>;
  public selectResults: any[];
  public selectedAgency$ = new BehaviorSubject<any>(null);
  public rowChanged$ = new BehaviorSubject<any>([]);
  public filterText$ = new BehaviorSubject<any>('');
  public selectResults$ = new BehaviorSubject<any[]>([]);
  public selectItems: any[];
  constructor(public service: HierarchicalDataService) { }

  configurations: any = {
    gridColumnsDisplayed: ['id', 'name', 'subtext'],
    primaryKey : 'id'
  };

  public ngOnInit() {
    this.tableData$ = this.selectedAgency$.pipe(
      switchMap(agencyId => this.service.getHiercarchicalById(agencyId)),
    );
    // this.selectedAgency$.subscribe(
    //   id => this.setOptionsData(this.service.getBreadcrumbOptions(id))
    // );
    this.selectResults$.subscribe(res =>
      this.selectItems = res
    );
    this.filterText$.subscribe(text =>
      this.filterText = text);
  }
  setOptionsData(data: any[]): void {
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
          item['id'] = ele.parentId;
          item['value'] = ele.id;
          item['label'] = ele.name;
          temp.push(item);
        }
      });
      return temp;
    }
  }
  onSelect() {
    this.selectResults = this.selectItems;
  }
}
