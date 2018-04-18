import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template:  `
  <prototype-nav></prototype-nav>
  <router-outlet></router-outlet>

  <div class="patterns-menu-space"></div>

  <div class="patterns-menu">
    <a routerLink="/prototypes">Prototypes</a>
    <span class="patterns-menu-divider"></span>
    <select class="sam transition" [(ngModel)]="selectedOption" (ngModelChange)="navigateTo()">
      <option *ngFor="let option of options" [ngValue]="option">{{ option.name }}</option>
    </select>
  </div>
  `
})
export class PagesComponent {
  selectedOption: any;
  constructor(private router: Router) {}

  options = [
    { name: 'Homepage', value: 'home' },
    { name: 'Search', value: 'search' },
    { name: 'Search Mobile', value: 'search-mobile' },
    { name: 'Report', value: 'report' }
  ];

  navigateTo() {
    if (this.selectedOption.value) {
      this.router.navigate([`/prototypes/page/${this.selectedOption.value}`]);
    }
  }
}
