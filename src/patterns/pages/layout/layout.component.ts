import {
  Component,
  ViewChild,
  OnInit,
  ChangeDetectorRef,
  forwardRef
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import { cloneDeep } from 'lodash';
import { FormlyFieldConfig } from '@ngx-formly/core';

import {
  SamSortDirective,
  SamModalComponent,
  SamPageNextService,
  DataStore,
  layoutStore
} from '@gsa-sam/sam-ui-elements';
import {
  faTable,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';

import {
  fields,
  model,
  columnDefinitions,
  checkboxes,
  SampleData
} from './data';
import {
  SampleDatabase,
  SampleDataSource
} from './database';

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
  public model = model;
  public fields: FormlyFieldConfig[] = fields;

  public _sampleData = SampleData;
  public sampleDatabase = new SampleDatabase();
  public dataSource: SampleDataSource | null;
  public referenceColumns = [];
  public displayedColumns = [];

  public options: any = checkboxes;
  public optionsBackup: any;
  public curPage = 1;
  public totalPages;

  public form: FormGroup;
  public filters: Observable<any>;
  public data: Observable<any>;
  public length: number;
  public columnDefObs = Observable.of(columnDefinitions);

  public faTable = faTable;
  public faChartBar = faChartBar;

  @ViewChild(SamSortDirective)
    public _sort: SamSortDirective;

  @ViewChild(SamModalComponent)
    public fieldsEditor: SamModalComponent;

    public test = [];
    public testOptions = [
      { key: 'one', value: 'one' },
      { key: 'two', value: 'two' },
      { key: 'three', value: 'three' },
      { key: 'four', value: 'four' },
      { key: 'five', value: 'five' },
    ];

  constructor (
    private _fb: FormBuilder,
    private _service: SamPageNextService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = this._fb.group({});
  }

  public ngOnInit() {
    // Connect table to data
    this.connect();
    // Subscribe to page service
    this._connectToPageService();
    // Ensure view is up-to-date with changes in model
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

  // modal action handlers
  public cancelModalAction(): void {
    this.options = cloneDeep(this.optionsBackup);
  }

  public submitModalAction(): void {
    this.fieldsEditor.closeModal(false);
    this.toggleColumns();
  }

  public toggleColumns(): void {
    this.displayedColumns = this.referenceColumns.slice(0);

    const columns = [
      this.options.organization,
      this.options.listing,
      this.options.status
    ];

    columns.forEach(
      column => this._toggleColumn(column)
    );
  }

  public onSortChange (event): void {
    this._service.model.properties.sort.setValue(event);
  }

  public removeItem (event): void {
    const current = this._service.get('filters').value;
    const key = Object.keys(event)[0];

    if (current[key]) {
      if (current[key].constructor === Array) {
        const index = current[key].indexOf(event[key]);
        current[key].splice(index, 1);
      } else {
        current[key] = null;
      }
      this._service.get('filters').patchValue(current);
    }
  }

  private _connectToPageService () {
    this._service.model.properties.data.valueChanges
      .subscribe(
        data => {
          this.length = data.length;
        }
      );

    this.filters = this._service.model.properties.filters
      .valueChanges
      .map(
        serviceModel => this._filtersToPills(serviceModel)
      );
  }

  private _filtersToPills (filters): any[] {
    const keys = Object.keys(filters);

    return keys.map(key => {
      let value;

      if (filters[key]) {
        if (filters[key].constructor === Array) {
          value = filters[key];
        } else {
          value = [filters[key]];
        }
      } else {
        value = [];
      }

      return {
        label: key,
        value: value
      };
    })
    .filter(filter => filter.value.length > 0);
  }

  private _toggleColumn (field): void {
    for (const option of field.options){
      const value = option.value;

      if (field.selected.indexOf(value) === -1) {
        delete this.displayedColumns[
          this.displayedColumns.indexOf(value)
        ];
      }
    }
  }
}
