// Disabling lint as this is 3rd party code for demo only
/* tslint:disable */
import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchUtil} from '../wage-determination/search.util';

//Angular 2 only
@Component({
  selector: 'sort-by',
  template: `<sam-sort-v0 [ngModel]="sortModel"
                       [options]="sortOptions"
                       (ngModelChange)="sortModelChange($event)">
             </sam-sort-v0 >`
})
export class SamSortFilter implements OnInit {

  defaultSortModel: any = {type:'modifiedDate', sort:'desc'};
  defaultEntSortModel: any = {type:'title', sort:'asc'};
  sortModel: any = this.defaultSortModel;
  oldSortModel: any = this.defaultSortModel;
  sortOptions = [];
  blankSearch: boolean;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private searchUtil: SearchUtil){}

  //Angular 2 only
  ngOnInit() {
    // even response
    this.activatedRoute.queryParams.subscribe(data => {
      this.sortModel = typeof data['sort'] === "string" ? this.setSortModel(decodeURI(data['sort'])) : (data['index'] != 'ei' ? this.defaultSortModel : this.defaultEntSortModel);
      this.blankSearch = !(data['keywords'] && data['keywords'].length>0);
      this.setupSortOptions(this.blankSearch, data['index']);
    });
  }

  setupSortOptions(blankSearch, index){
    var blankSortOptions = [
      {label:'Title', name:'Title', value:'title'},
      {label:'Date Modified', name:'Date Modified', value:'modifiedDate'}
    ];
    var querySortOptions = [
      {label:'Relevance', name:'Relevance', value:'relevance'},
      {label:'Title', name:'Title', value:'title'},
      {label:'Date Modified', name:'Date Modified', value:'modifiedDate'}
    ];
    var blankEntSortOptions = [
      {label:'Title', name:'Title', value:'title'}
    ];
    var queryEntSortOptions = [
      {label:'Relevance', name:'Relevance', value:'relevance'},
      {label:'Title', name:'Title', value:'title'}
    ];

    if(!blankSearch){
      if(index === 'ei'){
        this.sortOptions = queryEntSortOptions;
      }else if(index === 'cfda'){
        querySortOptions.push({label:'CFDA Number', name:'CFDA Number', value:'programNumber'});
        this.sortOptions = querySortOptions;
      } else {
        this.sortOptions = querySortOptions;
      }
    }else{
      if(index === 'ei'){
        this.sortOptions = blankEntSortOptions;
      }else if(index === 'cfda'){
        blankSortOptions.push({label:'CFDA Number', name:'CFDA Number', value:'programNumber'});
        this.sortOptions = blankSortOptions;
      } else {
        this.sortOptions = blankSortOptions;
      }
    }
  }

  setSortModel(sortBy) {
    if(sortBy.substring(0, 1) === '-') {
      return {type: sortBy.substring(1), sort: 'desc'};
    } else {
      return {type: sortBy, sort: 'asc'};
    }
  }

  sortModelChange(event) {
    this.oldSortModel = this.sortModel;
    this.sortModel = event;
    this.sortModel['sort'] = this.sortModel['type']==this.oldSortModel['type'] ? this.sortModel['sort'] : (this.sortModel['type']=='title' ? 'asc' : 'desc');
    this.executeSearch();
  }

  private executeSearch() {
    var qsobj = {};
    qsobj['sort'] = (this.sortModel['sort'] == 'desc' ? '-' : '')+(this.sortModel['type']);
    qsobj['page'] = 1;
    this.router.navigate(['/search'], {
      queryParams: qsobj,
      queryParamsHandling: "merge"
    });
  }
}
