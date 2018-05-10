import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import * as d3 from 'd3';
import { CdkTableModule } from '@angular/cdk';
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
/* tslint:disable */
import { Observable } from 'rxjs';
/* tslint:enable */
import { merge } from 'rxjs/observable/merge';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { SamSortDirective } from '../../components/table/sort.directive';
import { SamPaginationComponent } from 'sam-ui-elements/src/ui-kit/components/pagination';

@Component({
  templateUrl: 'table.template.html'
})
export class TablePageComponent implements OnInit {
  pageSize = 10;
  displayedColumns = ['agency', 'cfdaNumber', 'title', 'status', 'cost', 'lastUpdatedDate'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;
  curPage = 1;
  @ViewChild(SamPaginationComponent) paginator: SamPaginationComponent;
  @ViewChild(SamSortDirective) sort: SamSortDirective;
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) { return; }
          this.dataSource.filter = this.filter.nativeElement.value;
        });
  }
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
const RECORDS = [
    ['Department Of Agriculture/Agricultural Research Service',
    '10.001',
    'Agricultural Research_Basic and Applied Research',
    'Published',
    'Nov 08, 2016',
    'No',
    'Oct 30, 2008',
    'Oct 30, 2008',
    'No'],
    ['Department Of Agriculture',
    '10.001',
    'Sale of Federal Surplus Personal Property (title change)',
    'Published',
    'Dec 05, 2011',
    'No',
    'Jun 16, 2009',
    'Jun 16, 2009',
    'No'],
    ['Department Of Agriculture/Forest Service',
    '10.003',
    'Water Pollution',
    'Published',
    'Apr 19, 2016',
    'No',
    'Nov 18, 2011',
    'Nov 30, 2011',
    'No'],
    ['Department Of Agriculture/Animal And Plant Health Inspection Service',
    '10.003',
    'Test Plant and Animal Disease, Pest Control, and Animal Care',
    'Published',
    'Apr 17, 2017',
    'No',
    'Sep 11, 2008',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Animal And Plant Health Inspection Service',
    '10.028',
    'Wildlife Services TESTING',
    'Published',
    'Mar 10, 2016',
    'No',
    'Sep 11, 2008',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Animal And Plant Health Inspection Service',
    '10.029',
    'Avian Influenza Indemnity Program',
    'Published',
    'Nov 11, 2015',
    'No',
    'Oct 20, 2003',
    'Nov 05, 2008',
    'No'],
    ['Department Of Agriculture/Farm Service Agency',
    '10.051',
    'Commodity Loans and Loan Deficiency Payments',
    'Published',
    'Nov 14, 2008',
    'No',
    'Nov 14, 2008',
    'Nov 14, 2008',
    'No'],
    ['Department Of Agriculture/Farm Service Agency',
    '10.053',
    'Dairy Indemnity Program',
    'Published',
    'Nov 13, 2008',
    'No',
    'Nov 13, 2008',
    'Nov 13, 2008',
    'No'],
    ['Department Of Agriculture/Farm Service Agency',
    '10.054',
    'Emergency Conservation Program test',
    'Published',
    'Mar 16, 2016',
    'No',
    'Sep 11, 2008',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Farm Service Agency',
    '10.055',
    'Direct and Counter-cyclical Payments Program',
    'Published',
    'Sep 11, 2008',
    'No',
    'Sep 11, 2008',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Farm Service Agency',
    '10.056',
    'Farm Storage Facility Loans',
    'Published',
    'Oct 15, 2008',
    'No',
    'Apr 16, 2001',
    'Oct 15, 2008',
    'No'],
    ['Department Of Agriculture/Farm Service Agency',
    '10.066',
    'Livestock Assistance Program',
    'Published',
    'Oct 14, 2014',
    'No',
    'Oct 23, 2000',
    'Nov 05, 2008',
    'No'],
    ['Department Of Agriculture/Farm Service Agency',
    '10.069',
    'Conservation Reserve Program',
    'Published',
    'Sep 11, 2008',
    'No',
    'Sep 11, 2008',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Natural Resources Conservation Service',
    '10.07',
    'Colorado River Basin Salinity Control Program',
    'Published',
    'Sep 11, 2008',
    'No',
    'Sep 11, 2008',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Natural Resources Conservation Service',
    '10.072',
    'Wetlands Reserve Program',
    'Published',
    'Nov 05, 2008',
    'No',
    'Nov 05, 2008',
    'Nov 05, 2008',
    'No'],
    ['Department Of Agriculture/Farm Service Agency',
    '10.073',
    'Crop Disaster Program',
    'Published',
    'Nov 05, 2008',
    'No',
    'Oct 23, 2000',
    'Nov 05, 2008',
    'No'],
    ['Department Of Agriculture/Farm Service Agency',
    '10.077',
    'Livestock Compensation Program',
    'Published',
    'Sep 11, 2008',
    'No',
    'Oct 15, 2003',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Farm Service Agency',
    '10.078',
    'Bioenergy Program',
    'Published',
    'Oct 16, 2011',
    'No',
    'Oct 07, 2011',
    'Oct 16, 2011',
    'Yes'],
    ['Department Of Agriculture/Farm Service Agency',
    '10.079',
    'Bill Emerson Humanitarian Trust',
    'Published',
    'Sep 11, 2008',
    'No',
    'Oct 20, 2003',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Farm Service Agency',
    '10.08',
    'Milk Income Loss Contract Program',
    'Published',
    'Nov 02, 2016',
    'No',
    'Nov 20, 2003',
    'Nov 05, 2008',
    'No'],
    ['Department Of Agriculture/Farm Service Agency',
    '10.081',
    'Lamb Meat Adjustment Assistance Program',
    'Published',
    'Nov 05, 2008',
    'No',
    'Nov 20, 2003',
    'Nov 05, 2008',
    'No'],
    ['Department Of Agriculture/Farm Service Agency',
    '10.082',
    'Tree Assistance Program',
    'Published',
    'Oct 30, 2008',
    'No',
    'Jan 13, 2004',
    'Oct 30, 2008',
    'No'],
    ['Department Of Agriculture',
    '10.084',
    'Dairy Market Loss Assistance Program',
    'Published',
    'Oct 30, 2008',
    'No',
    'May 09, 2005',
    'Oct 30, 2008',
    'No'],
    ['Department Of Agriculture/Commodity Credit Corporation',
    '10.085',
    'Tobacco Transition Payment Program',
    'Published',
    'Nov 05, 2008',
    'No',
    'May 13, 2005',
    'Nov 05, 2008',
    'No'],
    ['Department Of Agriculture',
    '10.086',
    'Donation of Federal Surplus Personal Property',
    'Published',
    'Sep 29, 2009',
    'No',
    'Jun 17, 2009',
    'Jun 17, 2009',
    'No'],
    ['Department Of Agriculture/Agricultural Marketing Service',
    '10.153',
    'Market News',
    'Published',
    'Sep 11, 2008',
    'No',
    'Sep 11, 2008',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Agricultural Marketing Service',
    '10.155',
    'Marketing Agreements and Orders',
    'Published',
    'Sep 11, 2008',
    'No',
    'Sep 11, 2008',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Agricultural Marketing Service',
    '10.156',
    'Federal-State Marketing Improvement Program',
    'Published',
    'Sep 11, 2008',
    'No',
    'Sep 11, 2008',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Agricultural Marketing Service',
    '10.162',
    'Inspection Grading and Standardization',
    'Published',
    'Sep 11, 2008',
    'No',
    'Sep 11, 2008',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Agricultural Marketing Service',
    '10.163',
    'Market Protection and Promotion',
    'Published',
    'Sep 11, 2008',
    'No',
    'Sep 11, 2008',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Agricultural Marketing Service',
    '10.164',
    'Wholesale Farmers and Alternative Market Development',
    'Published',
    'Sep 11, 2008',
    'No',
    'Sep 11, 2008',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Agricultural Marketing Service',
    '10.165',
    'Perishable Agricultural Commodities Act',
    'Published',
    'Sep 11, 2008',
    'No',
    'Sep 11, 2008',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Agricultural Marketing Service',
    '10.167',
    'Transportation Services',
    'Published',
    'Sep 11, 2008',
    'No',
    'Sep 11, 2008',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Agricultural Marketing Service',
    '10.168',
    'Farmers\' Market Promotion Program',
    'Published',
    'Sep 11, 2008',
    'No',
    'Mar 17, 2006',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Agricultural Marketing Service',
    '10.169',
    'Specialty Crop Block Grant Program',
    'Published',
    'Sep 11, 2008',
    'No',
    'Jan 19, 2006',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Agricultural Marketing Service',
    '10.17',
    'Specialty Crop Block Grant Program - Farm Bill',
    'Published',
    'Oct 10, 2016',
    'No',
    'Jul 25, 2008',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Cooperative State Research, Education, And Extension Service',
    '10.2',
    'Grants for Agricultural Research, Special Research Grants',
    'Published',
    'Sep 11, 2008',
    'No',
    'Sep 11, 2008',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Cooperative State Research, Education, And Extension Service',
    '10.202',
    'Cooperative Forestry Research',
    'Published',
    'Sep 18, 2008',
    'No',
    'Sep 18, 2008',
    'Sep 18, 2008',
    'No'],
    ['Department Of Agriculture/Cooperative State Research, Education, And Extension Service',
    '10.203',
    'Payments to Agricultural Experiment Stations Under the Hatch Act',
    'Published',
    'Sep 11, 2008',
    'No',
    'Sep 11, 2008',
    'Sep 11, 2008',
    'No'],
    ['Department Of Agriculture/Cooperative State Research, Education, And Extension Service',
    '10.205',
    'Payments to 1890 Land-Grant Colleges and Tuskegee University',
    'Published',
    'Sep 12, 2008',
    'No',
    'Sep 12, 2008',
    'Sep 12, 2008',
    'No'],
    ['Department Of Agriculture/Cooperative State Research, Education, And Extension Service',
    '10.206',
    'Grants for Agricultural Research_Competitive Research Grants',
    'Published',
    'Sep 12, 2008',
    'No',
    'Sep 12, 2008',
    'Sep 12, 2008',
    'No'],
    ['Department Of Agriculture/Cooperative State Research, Education, And Extension Service',
    '10.207',
    'Animal Health and Disease Research',
    'Published',
    'Oct 30, 2008',
    'No',
    'Oct 30, 2008',
    'Oct 30, 2008',
    'No'],
    ['Department Of Agriculture/Cooperative State Research, Education, And Extension Service',
    '10.21',
    'Food and Agricultural Sciences National Needs Graduate Fellowship Grants',
    'Published',
    'Sep 12, 2008',
    'No',
    'Sep 12, 2008',
    'Sep 12, 2008',
    'No'],
    ['Department Of Agriculture/Cooperative State Research, Education, And Extension Service',
    '10.212',
    'Small Business Innovation Research',
    'Published',
    'Nov 05, 2008',
    'No',
    'Nov 05, 2008',
    'Nov 05, 2008',
    'No'],
    ['Department Of Agriculture/Cooperative State Research, Education, And Extension Service',
    '10.215',
    'Sustainable Agriculture Research and Education',
    'Published',
    'Sep 12, 2008',
    'No',
    'Sep 12, 2008',
    'Sep 12, 2008',
    'No'],
    ['Department Of Agriculture/Cooperative State Research, Education, And Extension Service',
    '10.216',
    '1890 Institution Capacity Building Grants',
    'Published',
    'Sep 12, 2008',
    'No',
    'Sep 12, 2008',
    'Sep 12, 2008',
    'No'],
    ['Department Of Agriculture/Cooperative State Research, Education, And Extension Service',
    '10.217',
    'Higher Education Challenge Grants',
    'Published',
    'Sep 12, 2008',
    'No',
    'Sep 12, 2008',
    'Sep 12, 2008',
    'No'],
    ['Department Of Agriculture/Cooperative State Research, Education, And Extension Service',
    '10.219',
    'Biotechnology Risk Assessment Research',
    'Published',
    'Sep 12, 2008',
    'No',
    'Sep 12, 2008',
    'Sep 12, 2008',
    'No'],
    ['Department Of Agriculture/Cooperative State Research, Education, And Extension Service',
    '10.22',
    'Higher Education Multicultural Scholars Program',
    'Published',
    'Sep 12, 2008',
    'No',
    'Sep 12, 2008',
    'Sep 12, 2008',
    'No'],
    ['Department Of Agriculture/Cooperative State Research, Education, And Extension Service',
    '10.221',
    'Tribal Colleges Education Equity Grants',
    'Published',
    'Sep 12, 2008',
    'No',
    'Sep 12, 2008',
    'Sep 12, 2008',
    'No']
];

export interface CFDAData {
    agency: string;
    cfdaNumber: string;
    title: string;
    status: string;
    lastUpdatedDate: string;
    obligationsUpdated: string;
    ombReviewDate: string;
    lastPublishedDate: string;
    autoPublished: string;
    cost: number;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<CFDAData[]> = new BehaviorSubject<CFDAData[]>([]);
  get data(): CFDAData[] { return this.dataChange.value; }

  constructor() {
    this.setupData();
  }

  setupData() {
    const copiedData = this.data.slice();
    for (let i = 0; i < RECORDS.length; i++) {
        const record = {
            agency: RECORDS[i][0],
            cfdaNumber: RECORDS[i][1],
            title: RECORDS[i][2],
            status: RECORDS[i][3],
            lastUpdatedDate: RECORDS[i][4],
            obligationsUpdated: RECORDS[i][5],
            ombReviewDate: RECORDS[i][6],
            lastPublishedDate: RECORDS[i][7],
            autoPublished: RECORDS[i][8],
            cost: Math.round(Math.random()*100),
        };

        copiedData.push(record);
    }
    this.dataChange.next(copiedData);
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  totalcost = 0;
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._paginator.currentPage = 1; this._filterChange.next(filter); }

  filteredData: CFDAData[] = [];
  renderedData: CFDAData[] = [];

  constructor(private _exampleDatabase: ExampleDatabase,
              private _paginator: SamPaginationComponent,
              private _sort: SamSortDirective) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<CFDAData[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.samSortChange,
      this._filterChange,
      this._paginator.pageChange,
    ];

    return merge(...displayDataChanges).map(() => {
      // Filter data
      this.filteredData = this._exampleDatabase.data.slice().filter((item: CFDAData) => {
        const searchStr = (item.agency + item.title).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });

      //set total
      this.totalcost = 0;
      this.filteredData.map((item: CFDAData)=>{
        this.totalcost += item.cost;
      });

      // Sort filtered data
      const sortedData = this.sortData(this.filteredData.slice());

      // Grab the page's slice of the filtered sorted data.
      const startIndex = (this._paginator.currentPage - 1) * 10;
      this.renderedData = sortedData.splice(startIndex, 10);
      return this.renderedData;
    });
  }

  disconnect() {}

  /** Returns a sorted copy of the database data. */
  sortData(data: CFDAData[]): CFDAData[] {
    if (!this._sort.active || this._sort.direction === '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this._sort.active) {
        case 'agency': [propertyA, propertyB] = [a.agency, b.agency]; break;
        case 'cfdaNumber': [propertyA, propertyB] = [a.cfdaNumber, b.cfdaNumber]; break;
        case 'title': [propertyA, propertyB] = [a.title, b.title]; break;
        case 'status': [propertyA, propertyB] = [a.status, b.status]; break;
        case 'lastUpdatedDate': [propertyA, propertyB] = [a.lastUpdatedDate, b.lastUpdatedDate]; break;
        case 'obligationsUpdated': [propertyA, propertyB] = [a.obligationsUpdated, b.obligationsUpdated]; break;
        case 'ombReviewDate': [propertyA, propertyB] = [a.ombReviewDate, b.ombReviewDate]; break;
        case 'lastPublishedDate': [propertyA, propertyB] = [a.lastPublishedDate, b.lastPublishedDate]; break;
        case 'autoPublished': [propertyA, propertyB] = [a.autoPublished, b.autoPublished]; break;
        case 'cost': [propertyA, propertyB] = [a.cost, b.cost]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}
