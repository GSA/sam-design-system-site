import { 
  Component,
  HostListener
} from '@angular/core';

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


@Component({
  templateUrl: 'search.template.html',
  animations:[
    trigger('filters', [
      state('close', style({
        display: 'none'
      })),
      state('open', style({
        display: 'block'
      }))
    ])
  ]
})
export class SearchMobileComponent{

  filterOptions = false;
  mouseOver(){
    this.filterOptions = !this.filterOptions;
    console.log("filter button mouseover");
  }
  clicked = 0;
  filterState = 'close';
  clickFilter(event){
    this.clicked += 1;
    if(this.clicked == 2){
      this.filterState = 'open';
    }else if(this.clicked == 3){
      this.filterState = 'close';
      this.clicked = 0;
    }
    console.log(this.clicked);
  }
  
}