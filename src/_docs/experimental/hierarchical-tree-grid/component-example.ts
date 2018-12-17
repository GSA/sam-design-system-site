import {
  Component, OnInit, ViewChild, AfterViewInit
} from '@angular/core';
import { HierarchicalDataService } from '../../services/hierarchical.service';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { OptionsType } from '@gsa-sam/sam-ui-elements/src/ui-kit/types';
import { Subscription, Observable, Subject, of, BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
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

  constructor(public service: HierarchicalDataService) {}

  configurations: any = {
    displayedColumns: ['id', 'name', 'subtext'],
  };

  public ngOnInit() {
    this.tableData$ = this.selectedAgency$.pipe(
      switchMap(agencyId => this.service.getHiercarchicalById(agencyId)),
    );

    this.tableData$.subscribe(
      data => this.setOptionsData(data)
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
        console.log(ele);
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

  // onAgencySelect(agecySelectedItem) {
  //   this.selectedAgency = agecySelectedItem;

  //   this.service.getHiercarchicalById(agecySelectedItem).subscribe(
  //     (res) => {
  //       this.data = res;
  //     });
  // }

  // getData(id: string | null): void {
  //   this.data = [];
  //   // this.tableData$.next(id);
  //   this.service.getHiercarchicalById(id).subscribe(
  //     (res) => {
  //       this.data = res;
  //     });
  // }
}
