import {
  Component,
  OnInit,
  ChangeDetectorRef
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
export class SamHierarchicalTreeComponentExampleComponent implements OnInit {

  // public tableData$: Observable<any>;
  // public selectedAgency$ = new BehaviorSubject<any>(null);
  public selectResults$ = new BehaviorSubject<any[]>([]);
  public selectItems: any[];
  public hierarchyConfiguration: any = {
    primaryKey: 'id',
    gridColumnsDisplayed: [
      { headerText: 'Id', fieldName: 'id' },
      { headerText: 'Name', fieldName: 'name' },
      { headerText: 'Sub Text', fieldName: 'subtext' },
      { headerText: 'Children', fieldName: 'childCount' }

    ]
  };
  constructor(public service: HierarchicalDataService, private cdr: ChangeDetectorRef) { }

  public ngOnInit() {
    //   this.tableData$ = this.selectedAgency$.pipe(
    //     switchMap(id => this.service.getHiercarchicalById(id)));
    //   this.cdr.detectChanges();
    //   this.selectedAgency$.subscribe(
    //     id => this.setOptionsData(this.service.getBreadcrumbOptions(id))
    //   );
    this.selectResults$.subscribe(res => this.selectItems = res);

    // }
    // setOptionsData(data: any[]): void {
    //   this.hierarchyConfiguration.options = this.getOptionsData(data);
    // }

    // getOptionsData(data: any[]): OptionsType[] {
    //   const temp = [];
    //   if (!data || data.length === 0) {
    //     return temp;
    //   } else {
    //     data.forEach((ele) => {
    //       if (ele.id) {
    //         const item = {};
    //         item['name'] = ele.name;
    //         item['id'] = ele.parentId;
    //         item['value'] = ele.id;
    //         item['label'] = ele.name;
    //         temp.push(item);
    //       }
    //     });
    //     return temp;
    //   }
  }
}
