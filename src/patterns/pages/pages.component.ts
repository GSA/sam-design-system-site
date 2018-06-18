import { Component, OnDestroy } from '@angular/core';
import {
  Router,
  NavigationEnd,
  UrlTree,
  UrlSegmentGroup,
  UrlSegment,
  PRIMARY_OUTLET
} from '@angular/router';

@Component({
  template:  `
    <sam-master-page>
      <router-outlet></router-outlet>
    </sam-master-page>
    <div class="patterns-menu-space"></div>
    <div class="patterns-menu">
      <a routerLink="/patterns/latest/home">Patterns Home</a>
      <span class="patterns-menu-divider"></span>
      <select class="sam transition" [(ngModel)]="selectedOption" (ngModelChange)="navigateTo()">
        <option *ngFor="let option of options" [ngValue]="option">
          {{ option.name }}
        </option>
      </select>
      <span class="patterns-menu-divider"></span>
      <a>Implementation</a>
    </div>
  `
})
export class PagesComponent implements OnDestroy {

  selectedOption: any;

  options = [
    { name: 'User Account', value: 'a' },
    { name: 'Award Domains', value: 'b' },
    { name: 'Layout', value: 'layout'}
  ];

  routerSubscription: any;

  constructor(private router: Router) {
    this.routerSubscription = router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
        const tree: UrlTree = router.parseUrl(event.url);
        const group: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
        const segment: UrlSegment[] = group.segments;
        this.selectOption(segment[2].path);
      }
    });
  }

  selectOption(value) {
    this.options.forEach(option => {
      if (option.value === value) {
        this.selectedOption = option;
      }
    });
  }

  navigateTo() {
    if (this.selectedOption.value) {
      this.router.navigate([`/patterns/page/${this.selectedOption.value}`]);
    }
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
