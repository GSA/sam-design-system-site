import { Component} from '@angular/core';
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
  animation
} from '@angular/animations';
import { SamMasterPageService } from '../../../../sam-ui-elements/src/ui-kit/experimental/master-page';
import { MenuItem } from '../../../../sam-ui-elements/src/ui-kit/components/sidenav';
import { PagesService } from '../pages.service';

@Component({
  templateUrl: 'home.template.html',
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
      transition('close => open', [
        query('.filter', style({ opacity: 0})),
        query(':self',[
          animate('250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)'),
        ]),
        query('.filter', stagger('50ms', [
          animate('200ms 250ms ease-in', style({ opacity: 1 }))
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
        query(':self',[
          animate('250ms 210ms cubic-bezier(0.175, 0.885, 0.32, 1.275)'),
        ])
      ])
    ]),
    trigger('searchResults',[
      transition('* => *', [
        query('.search-result', style({ opacity: 0})),
        query('.search-result', stagger('100ms', [
          animate('250ms 5.7s ease-in', style({
            opacity: 1
          }))
        ]))
      ])
    ]),
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
    ])
  ]
})
export class SearchPageHomeComponent{

  constructor(
    private masterpageservice: SamMasterPageService, 
    private pagesservice: PagesService){
    masterpageservice.docLink = "a-doc";
    masterpageservice.settingsLink = "a-settings";
  }

  filtersDrawer = 'open';

  toggleFilters(){
    this.filtersDrawer = this.filtersDrawer === 'open' ? 'close' : 'open';
  }

  filterLink(){
    if(this.filtersDrawer == 'open'){
      return 'Hide';
    }else{
      return 'Show';
    }
  }

}