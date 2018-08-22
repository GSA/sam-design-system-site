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
import { SamSortDirective } from '@gsa-sam/sam-ui-elements';
import 'rxjs/add/observable/merge';
import { SamModalComponent } from '@gsa-sam/sam-ui-elements';
import { SamPageNextService, DataStore, layoutStore} from '@gsa-sam/sam-ui-elements';
import { filterItemModel } from '@gsa-sam/sam-ui-elements';
import { cloneDeep } from 'lodash';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

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
  /**
   * Provide any model to formly. The key for each property
   * corresponds to the key on each FormlyField config.
   */
  public model1 = {
    fhInputText: null,
    dateModel: [],
    email: { key: 'start', value: 'start' },
    text: 'Hello World',
    checkbox: [],
  };

  /**
   * Array of configuration options for form controls.
   * The key specifies the corresponding field form the model,
   * and the type determines which UI control to use. Each
   * UI control can be configured using templateOptions. Any
   * valid member of the components interface can be set here
   * (see corresponding component documentation).
   */
  public fields: FormlyFieldConfig[] = [
    {
      key: 'fhInputText',
      type: 'text',
      wrappers: ['filter'],
      templateOptions: {
        label: 'Agency',
        id: 'agency',
        name: 'agency'
      }
    },
    {
      key: 'email',
      type: 'autocomplete',
      wrappers: ['filter'],
      templateOptions: {
        label: 'Email Address',
        labelText: 'Email address',
        placeholder: 'Enter email',
        name: 'autocomplete test',
        id: 'unique_and_meaningful_id_value_1',
        hint: 'Show a hint here...',
        config: {
          categoryProperty: 'category',
          categoryIsSelectable: true,
          keyValueConfig: {
            keyProperty: 'key',
            valueProperty: 'value',
            subheadProperty: 'subhead'
          }
        },
        allowAny: false,
        categories: [
          {
            key: 'People',
            value: 'People'
          },
          {
            key: 'Places',
            value: 'Places'
          }
        ],
      },
      validators: {
        ip: {
          expression: function TestValidator () { return true; },
          message: 'Broke as a joke',
        },
      },
    },
    {
      key: 'text',
      type: 'text',
      wrappers: ['filter'],
      templateOptions: {
        label: 'Text',
        name: 'Text',
        id: 'Text'
      }
    },
    {
      key: 'checkbox',
      type: 'checkbox',
      wrappers: ['filter'],
      templateOptions: {
        options: [
          {
            value: 'dc',
            label: 'DC',
            name: 'checkbox-dc'
          },
          {
            value: 'ma',
            label: 'Maryland',
            name: 'checkbox-maryland'
          },
          {
            value: 'va',
            label: 'Virginia',
            name: 'checkbox-virginia'
          },
        ],
        name: 'my-sr-name',
        label: 'Select a region (normal)',
        hasSelectAll: false,
        errorMessage: null,
        hint: ''
      }
    }
  ];


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
      fhInputText: [],
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

  public toggleFieldsEditor () {
    // backup in case of cancel action
    this.optionsBackup = cloneDeep(this.options);
    this.fieldsEditor.openModal();
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
