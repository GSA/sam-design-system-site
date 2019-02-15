
/* tslint:disable */
import {
  Component
} from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'doc-sam-checkbox-list',
  templateUrl: './component-example.html'
})
export class SamDateRangeV2ExampleComponent {
  startDateConfig: any = {
    name: 'Start Date',
    placeholder: 'Start Date',
    label:'Start Date Picker',
    hint:'',
    date :'12/21/2001'
  };

  endDateConfig: any = {
    name: 'End Date',
    placeholder: 'End Date',
    label:'End Date Picker',
    hint:'',
    date :'12/21/2021'
  };

  public selectDates: object;

  public selectedDates$ = new BehaviorSubject<any>([]);
  public ngOnInit() {
    this.selectedDates$.subscribe(res =>
      this.selectDates = res
    );
  }
}

