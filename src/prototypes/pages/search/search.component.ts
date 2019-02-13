import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  keyframes,
  stagger,
  animation,
  group
} from '@angular/animations';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {
  faSlidersH
} from '@fortawesome/free-solid-svg-icons';
import { environment } from 'environment';

const listItems = {
  state: {
    label: 'State',
    value: 'Arizona'
  },
  counties: {
    label: 'Counties',
    value: ['Pima', 'Pinal', 'Yavapai', 'Yuma']
  },
  modification: {
    label: 'Modification #',
    value: '3'
  },
  construction: {
    label: 'Construction Type',
    value: 'Building'
  },
  revisedDate: {
    label: 'Last Revised Date',
    value: new Date()
  }
};


@Component({
  templateUrl: 'search.template.html',
  animations: [
    trigger('filtersDrawer', [
      state('close', style({
        display: 'none',
        backgroundColor: 'white',
        width: '0'
      })),
      state('open', style({
        width: '*'
      })),
      transition('* => open', [
        query('*', style({ opacity: 0})),
        query(':self', [
          animate('250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)'),
        ]),
        query('*', stagger('30ms', [
          animate('200ms 150ms ease-in', style({ opacity: 1 }))
        ]), { optional: true })
      ]),
      transition('open => close', [
        query('*', [
          style({ opacity: 1}),
          animate('200ms', style({
            opacity: 0,
            display: 'none'
          }))
        ]),
        query(':self', [
          animate('250ms 210ms cubic-bezier(0.175, 0.885, 0.32, 1.275)'),
        ])
      ])
    ]),
    trigger('searchResults', [
      transition('* => *', [
        query('.search-result', style({ opacity: 0})),
        query('.search-result', stagger('100ms', [
          animate('250ms 5.7s ease-in', style({
            opacity: 1
          }))
        ]))
      ])
    ]),
    // trigger('searchResults',[
    //   transition('* => *', [
    //     query('.search-result', style({ opacity: 0})),
    //     query('.search-result', [
    //       animate('100ms 5.6s ease-in', style({
    //         opacity: 1
    //       }))
    //     ])
    //   ])
    // ]),
    trigger('resultsLoading', [
      state('loading', style({
        display: 'block'
      })),
      state('done', style({
        opacity: 0,
        display: 'none'
      })),
      transition('* => *', [
        query('.search-result-loading', stagger('100ms', [
          animate('250ms 1s ease-in', style({
            opacity: 1
          }))
        ])),
        query('.search-result-loading', stagger('100ms reverse', [
          animate('250ms 3s ease-out', style({
            opacity: 0
          }))
        ])),
        query(':self', [
          animate('200ms', style({
            opacity: 0
          }))
        ]),
      ])
    ]),
    trigger('filterSlide', [
      transition('parent => child', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(200px)',
              opacity: '0',
              height: '0',
            }),
            animate('250ms ease-out', style({
              transform: 'translateX(-100px)',
              opacity: '1',
              height: '*'
            }))
          ]),
          query(':leave', [
            style({
              opacity: '1',
              height: '*'
            }),
            animate('350ms ease-out', style({
              transform: 'translateX(-300px)',
              opacity: '0',
              height: '0',
            }))
          ]),
        ])
      ]),
      transition('child => parent', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(-200px)',
              opacity: '0',
              height: '0',
            }),
            animate('250ms ease-out', style({
              transform: 'translateX(0px)',
              opacity: '1',
              height: '*',
            }))
          ]),
          query(':leave', [
            style({
              opacity: '1',
              height: '*'
            }),
            animate('350ms ease-out', style({
              transform: 'translateX(300px)',
              opacity: '0',
              height: '0',
            }))
          ]),
        ])
      ])
    ]),
    trigger('arrowAnimation', [
      transition('* => *', [
        query(':enter', [
          style({
            display: 'inline-block',
            transform: 'translateX(-15px)',
            width: '0'
          }),
          animate('250ms ease-in', style({
            display: 'inline-block',
            transform: 'translateX(0px)',
            width: '*'
          }))
        ], { optional: true }),
        query(':leave', [
          style({
            display: 'inline-block',
            transform: 'translateX(0px)',
            width: '*'
          }),
          animate('250ms ease-in', style({
            display: 'inline-block',
            transform: 'translateX(-15px)',
            width: '0'
          }))
        ], { optional: true })
      ])
    ])
  ]
})
export class SearchPageComponent
  implements OnInit {
  filtersDrawer = 'open';
  selectedDomain = 'All Award Data';
  filterSlide: string;
  faSlidersH = faSlidersH;

  public listData = listItems;
  public helpText: string;

  constructor (public http: Http) {}

  public ngOnInit () {

    this.http.get(`${environment.DEPLOYURL}assets/helpText.txt`)
      .map(
        (response: any) => {
          return response.text();
        }
      )
      .subscribe(
        (data) => this.helpText = data,
        (err) => this.helpText = ''
      );
  }

  toggleFilters() {
    this.filtersDrawer = this.filtersDrawer === 'open' ? 'close' : 'open';
  }

  filterSlideToggle(domain) {
    this.selectedDomain = domain;
    if (domain === 'All Award Data') {
      this.filterSlide = 'parent';
    } else {
      this.filterSlide = 'child';
    }
  }

  filterLink() {
    if (this.filtersDrawer === 'open') {
      return 'Hide';
    } else {
      return 'Show';
    }
  }
}
