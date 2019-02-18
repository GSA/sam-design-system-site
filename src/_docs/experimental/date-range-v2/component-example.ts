import {
  Component
} from '@angular/core';

@Component({
  selector: 'doc-sam-checkbox-list',
  templateUrl: './component-example.html'
})
export class SamDateRangeV2ExampleComponent {

  dateModel: any = {
    startDate: '12/21/01',
    endDate: '12/21/2021'
  };

  dateRangeConfig = {
    label: 'Date Range',
    hint: 'Date range for ad-hoc report'
  };

  startDateConfig: any = {
    name: 'Start Date',
    placeholder: 'Start Date',
    label: 'Start Date Picker',
    hint: '',
    dateFormat: 'M/DD/YY',
    showCalendar : false,
    disabled: true
  };

  endDateConfig: any = {
    name: 'End Date',
    placeholder: 'End Date',
    label: 'End Date Picker',
    hint: '',
  };
}

