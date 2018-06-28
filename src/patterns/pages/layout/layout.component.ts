import {
  Component,
  ViewChild,
  OnInit,
  ChangeDetectorRef,
  forwardRef
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SampleData } from './datasource';
import { SampleDatabase, SampleDataSource } from './database';
import { SamSortDirective } from 'sam-ui-elements/src/ui-kit/experimental/data-table/sort.directive';
import 'rxjs/add/observable/merge';
import { SamModalComponent } from 'sam-ui-elements/src/ui-kit/components/modal';
import { SamPageNextService, DataStore, layoutStore} from 'sam-ui-elements/src/ui-kit/experimental/patterns/layout';
import { filterItemModel } from 'sam-ui-elements/src/ui-kit/experimental/patterns/layout/architecture/model';
import { cloneDeep } from 'lodash';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'sam-layout-demo-component',
  templateUrl: './layout.template.html',
  providers: [
    {
      provide: DataStore,
      useValue: layoutStore
    },
    forwardRef(() => SamPageNextService)
  ]
})
export class SamLayoutDemoComponent implements OnInit {
  _sampleData = SampleData;
  sampleDatabase = new SampleDatabase();
  dataSource: SampleDataSource | null;
  referenceColumns = [];
  displayedColumns = [];

  public options: any;
  public optionsBackup: any;
  public curPage = 1;
  public totalPages;


  public form: FormGroup;
  public model: Observable<any>;
  public filters: Observable<any>;
  public data: Observable<any>;
  public length: number;
  public columnDefObs = Observable.of([
    {
      'def': 'Agency',
      'headerLabel': 'Agency',
      'cellId': 'Agency'
    },
    {
      'def': 'CFDANumber',
      'headerLabel': 'CFDA Number',
      'cellId': 'CFDA Number'
    },
    {
      'def': 'Title',
      'headerLabel': 'Title',
      'cellId': 'Title'
    },
    {
      'def': 'CurrentStatus',
      'headerLabel': 'Current Status',
      'cellId': 'Current Status'
    },
    {
      'def': 'LastUpdatedDate',
      'headerLabel': 'Last Updated Date',
      'cellId': 'Last Updated Date'
    },
    {
      'def': 'ObligationsUpdated',
      'headerLabel': 'Obligations Updated',
      'cellId': 'Obligations Updated'
    },
    {
      'def': 'OMBReviewDate',
      'headerLabel': 'OMB Review Date',
      'cellId': 'OMB Review Date'
    },
    {
      'def': 'LastPublishedDate',
      'headerLabel': 'Last Published Date',
      'cellId': 'Last Published Date'
    },
    {
      'def': 'AutoPublished',
      'headerLabel': 'Auto Published',
      'cellId': 'Auto Published'
    }
  ]);

  @ViewChild(SamSortDirective) _sort: SamSortDirective;
  @ViewChild(SamModalComponent) fieldsEditor: SamModalComponent;

  constructor (
    private _fb: FormBuilder,
    private _service: SamPageNextService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = this._fb.group({
      fhInputText: [''],
      dateModel: []
    });
  }

  public ngOnInit() {
    this.options = this.checkboxOptions();
    this.connect();

    this._service.model.properties.data.valueChanges.subscribe(
      data => {
        this.length = data.length;
      }
    );

    this.filters = this._service.model.properties.filters.valueChanges
      .map(model => this._filtersToPills(model));

    this.cdr.detectChanges();
  }

  public toggleFieldsEditor (name) {
    // backup in case of cancel action
    // this.optionsBackup = cloneDeep(this.options);
    // this.fieldsEditor.openModal();
    const obj = {}
    obj[name] = true;
    this._service.get('actions').patchValue(obj);
    console.log('Would have opened the modal');
  }

  // setup datasource
  public connect() {
    this.referenceColumns = [
      'Agency',
      'CFDANumber',
      'Title',
      'CurrentStatus',
      'LastUpdatedDate',
      'ObligationsUpdated',
      'OMBReviewDate',
      'LastPublishedDate',
      'AutoPublished'
    ];
    this.displayedColumns = this.referenceColumns.slice(0);
    // data table
    this.dataSource = new SampleDataSource(
      this.sampleDatabase,
      this._service
    );
  }

  // setup modal checkboxes
  public checkboxOptions (): {organization: any, listing: any, status: any} {

    const organization = {
      label: 'Organization',
      options: [
        {label: 'Dept or Ind. Agency', name: 'Dept or Ind. Agency', value: 'Agency'}
      ],
      selected: [
        'Agency'
      ]
    };

    const listing = {
      label: 'Listing',
      options: [
        {label: 'CFDA Number', name: 'CFDA Number', value: 'CFDANumber'},
        {label: 'Title', name: 'Title', value: 'Title'}
      ],
      selected: [
        'CFDANumber',
        'Title'
      ]
    };

    const status = {
      label: 'Status',
      options: [
        {label: 'Current Status', name: 'Current Status', value: 'CurrentStatus'},
        {label: 'Last Updated Date', name: 'Last Updated Date', value: 'LastUpdatedDate'},
        {label: 'Obligations Updated', name: 'Obligations Updated', value: 'ObligationsUpdated'},
        {label: 'OMB Review Date', name: 'OMB Review Date', value: 'OMBReviewDate'},
        {label: 'Last Published Date', name: 'Last Published Date', value: 'LastPublishedDate'},
        {label: 'Auto Published', name: 'Auto Published', value: 'AutoPublished'}
      ],
      selected: [
        'CurrentStatus',
        'LastUpdatedDate',
        'ObligationsUpdated',
        'OMBReviewDate',
        'LastPublishedDate',
        'AutoPublished'
      ]
    };

    return {
      organization,
      listing,
      status
    };
  }

  // modal action handlers
  cancelModalAction() {
    this.options = cloneDeep(this.optionsBackup);
  }

  submitModalAction() {
    this.fieldsEditor.closeModal(false);
    this.toggleColumns();
  }

  toggleColumns() {
    this.displayedColumns = this.referenceColumns.slice(0);
    for (const option of this.options.organization.options){
      const optionValue = option.value;
      if (this.options.organization.selected.indexOf(option.value) === -1) {
        delete this.displayedColumns[this.displayedColumns.indexOf(option.value)];
      }
    }

    for (const option of this.options.listing.options){
      const optionValue = option.value;
      if (this.options.listing.selected.indexOf(option.value) === -1) {
        delete this.displayedColumns[this.displayedColumns.indexOf(option.value)];
      }
    }

    for (const option of this.options.status.options){
      const optionValue = option.value;
      if (this.options.status.selected.indexOf(option.value) === -1) {
        delete this.displayedColumns[this.displayedColumns.indexOf(option.value)];
      }
    }
  }

  public onSortChange (event) {
    this._service.model.properties.sort.setValue(event);
  }

  private _filtersToPills (filters): filterItemModel[] {
    const keys = Object.keys(filters);
    return keys.map(
      key => {
        const obj: filterItemModel = {
          id: key,
          label: key,
          value: filters[key]
        };
        return obj;
      }
    )
    .filter(
      filter => !!filter.value
    );
  }
}
