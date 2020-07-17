import { Component } from '@angular/core';

@Component({
  selector: 'doc-sam-checkbox-list',
  templateUrl: './component-example.html',
})
export class SamDateRangeV2ExampleComponent {
  dateModel: any = {
    startDate: '12/21/2001',
    endDate: '12/21/2021',
  };

  dateRangeConfig = {
    label: 'Date Range',
    hint: 'Date range for ad-hoc report with default values',
  };

  startDateConfig: any = {
    name: 'Start Date',
    placeholder: 'Start Date',
    label: 'Start Date Picker',
    hint: '',
    showCalendar: false,
    disabled: false,
  };

  endDateConfig: any = {
    name: 'End Date',
    placeholder: 'End Date',
    label: 'End Date Picker',
    hint: '',
  };

  dateModel1: any = {
    startDate: '02-01-2019',
    endDate: '01-31-2019',
  };

  dateRangeConfig1 = {
    label: 'Date Range with custom options',
    hint: 'Date range for ad-hoc report',
  };

  startDateConfig1: any = {
    name: 'Start Date',
    placeholder: 'Start Date',
    label: 'Start Date Picker',
    hint: '',
    showCalendar: true,
    weekStart: 1,
    dateFormat: 'MM-DD-YYYY',
    rangeStart: new Date(2019, 0, 1),
    rangeEnd: new Date(2019, 4, 1),
  };

  endDateConfig1: any = {
    name: 'End Date',
    placeholder: 'End Date',
    label: 'End Date Picker',
    hint: '',
    dateFormat: 'MM-DD-YYYY',
    disabled: true,
  };
}
