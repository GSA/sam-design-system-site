import {
    Component,
    ViewChild,
    OnInit,
    forwardRef,
    ChangeDetectorRef
  } from '@angular/core';
  import { Observable } from 'rxjs/Observable';
  import { SampleData } from './datasource';
  import { SamSortDirective } from '@gsa-sam/sam-ui-elements';
  import 'rxjs/add/observable/merge';
  import { SamModalComponent } from '@gsa-sam/sam-ui-elements';
  import {
    SamPaginationNextComponent,
    DataStore,
    layoutStore,
    SamPageNextService,
    filterItemModel
  } from '@gsa-sam/sam-ui-elements';
  import { NgModel, FormBuilder, FormGroup } from '@angular/forms';

  @Component({
    selector: 'sam-search-demo-component',
    templateUrl: './search.template.html',
    providers: [{
      provide: DataStore,
      useValue: layoutStore
    },
    forwardRef(() => SamPageNextService)]
  })
  export class SamSearchDemoComponent implements OnInit {
    _sampleData = SampleData._embedded.results;
    _samplePage = SampleData.page;
    activeRows = [];
    referenceColumns = [];
    displayedColumns = [];

    public options: any;
    public optionsBackup: any;
    public filterItems = [];
    public curPage = 1;
    public totalPages;

    public form: FormGroup;
    public model: Observable<any>;
    public filters: Observable<any>;
    public pagination: Observable<any>;
    public data: Observable<any>;
    public length: number;

    @ViewChild(SamSortDirective) _sort: SamSortDirective;
    @ViewChild(SamModalComponent) fieldsEditor: SamModalComponent;
    @ViewChild('paginator') _paginator: SamPaginationNextComponent;
    @ViewChild('fhInput') fhInput: NgModel;
    @ViewChild('dateFilter') dateFilter: NgModel;

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
      this._service.get('data').setValue(this._sampleData);
      this._service.get('data').valueChanges.subscribe(
        data => {
          this.length = data.length;
          this.activeRows = data;
        }
      );

      this.filters = this._service.get('filters').valueChanges
        .map(model => this._filtersToPills(model));

      this.filters.subscribe(data => {
        this.curPage = 1;
        // reload data via http call
        if (data.length !== 0) {
          this._service.get('data').setValue(this._sampleData.slice(0, 1));
        } else {
          this._service.get('data').setValue(this._sampleData);
        }
      });

      this._service.get('pagination').valueChanges.subscribe(model => {
        this.curPage = model.currentPage;
        this._service.get('data').setValue(this._sampleData);
      });

      this.cdr.detectChanges();
    }

    public onSortChange (event) {
      this._service.get('sort').setValue(event);
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
