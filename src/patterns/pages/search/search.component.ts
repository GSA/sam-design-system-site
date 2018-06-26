import {
    Component,
    ViewChild,
    OnInit,
    ChangeDetectorRef
  } from '@angular/core';
  import { Observable } from 'rxjs/Observable';
  import { SampleData } from './datasource';
  import { SamSortDirective } from 'sam-ui-elements/src/ui-kit/experimental/data-table/sort.directive';
  import 'rxjs/add/observable/merge';
  import { SamModalComponent } from 'sam-ui-elements/src/ui-kit/components/modal';
  import { SamDatabankPaginationComponent, DataStore, filterItemModel } from 'sam-ui-elements/src/ui-kit/experimental/patterns/layout';
  import { NgModel, FormBuilder, FormGroup } from '@angular/forms';

  @Component({
    selector: 'sam-search-demo-component',
    templateUrl: './search.template.html'
  })
  export class SamSearchDemoComponent implements OnInit {
    _sampleData = SampleData._embedded.results;
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
    @ViewChild('paginator') _paginator: SamDatabankPaginationComponent;
    @ViewChild('fhInput') fhInput: NgModel;
    @ViewChild('dateFilter') dateFilter: NgModel;
  
    constructor (
      private _fb: FormBuilder,
      private _store: DataStore,
      private cdr: ChangeDetectorRef
    ) {
      this.form = this._fb.group({
        fhInputText: [''],
        dateModel: []
      });
    }
  
    public ngOnInit() {
  
      this.model = this._store.state;
      this.data = this.model.map(model => model.data);
  
      this.data.subscribe(
        data => this.length = data.length
      );
  
      this.filters = this.model
        .map(model => this._filtersToPills(model.filters));
  
      this.pagination = this.model
        .map(model => model.pagination);
        
      this.cdr.detectChanges();

      this.filters.subscribe(data=>{
          //reload data via http call
          if(data.length != 0){
            this._sampleData = SampleData._embedded.results.slice(0,1);
          } else {
            this._sampleData = SampleData._embedded.results;
          }
      });
    }
  
    public onPageChange (event) {
      const pg = {
        pageSize: this._paginator.pageSize,
        currentPage: this._paginator.currentPage,
        totalPages: this._paginator.totalPages
      };
      this._store.update(
        {
          type: 'PAGE_CHANGE',
          payload: pg
        }
      );
    }
  
    public onSortChange (event) {
      this._store.update(
        {
          type: 'SORT_CHANGE',
          payload: event
        }
      );
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
  