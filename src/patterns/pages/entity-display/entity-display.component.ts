import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef
} from '@angular/core';

import {
  faCheck
} from '@fortawesome/free-solid-svg-icons';

import {
  SidenavService,
  SamPaginationComponent,
  SamSortDirective
} from '@gsa-sam/sam-ui-elements';

import {
  fromEvent
} from 'rxjs/observable/fromEvent';

import {
  ExampleDataSource,
  ExampleDatabase
} from './data-source';


@Component({
  selector: 'sam-entity-display',
  templateUrl: 'entity-display.template.html',
  providers: [ SidenavService ]
})

export class SamEntityDisplayComponent implements OnInit{
  config = {
    label: 'stuff',
    children: [
      {
        label: 'Entity Registration',
        route: '/foo',
        children: [
          {
            label: 'Core Data',
            route: '/lorem',
            children: [
              {
                label: 'Business Information',
                route: '/sit'
              },
              {
                label: 'Taxpayer Information',
                route: '/amet'
              },
              {
                label: 'Entity Types',
                route: '/consectetur'
              },
              {
                label: 'Points of Contact',
                route: '/consectetur'
              },
              {
                label: 'Security Information',
                route: '/consectetur'
              }
            ]
          },
          {
            label: 'Assertions',
            route: '/ipsum',
            children: [
              {
                label: 'Grandchild 1',
                route: '/adipisicings'
              }
            ]
          },
          {
            label: 'Reps and Certs',
            route: '/dolor'
          }
        ]
      },
      {
        label: 'Integrity Information',
        route: '/bar',
        children: [
          {
            label: 'Child 1',
            route: '/elit'
          },
          {
            label: 'Child 2',
            route: '/cumque'
          },
          {
            label: 'Child 3',
            route: '/dignissimos'
          }
        ]
      }
    ]
  };

  pageSize = 10;
  totalPages = 1;
  displayedColumns = ['agency', 'cfdaNumber', 'title', 'cost', 'lastUpdatedDate'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;
  curPage = 1;
  @ViewChild(SamPaginationComponent) paginator: SamPaginationComponent;
  @ViewChild(SamSortDirective) sort: SamSortDirective;
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(
        this.exampleDatabase,
        this.paginator,
        this.sort
    );
    fromEvent(this.filter.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) { return; }
          this.dataSource.filter = this.filter.nativeElement.value;
        });
  }

  updateFilter(filterText) {
    this.filter.nativeElement.value = filterText;
    this.dataSource.filter = filterText;
  }

}
