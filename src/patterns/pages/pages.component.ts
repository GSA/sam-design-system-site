import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template:  `
    <sam-master-page>
      <router-outlet></router-outlet>
    </sam-master-page>
    <div class="patterns-menu-space"></div>
    <div class="patterns-menu">
      <a routerLink="/patterns/latest/home">Patterns Home</a>
      <span class="patterns-menu-divider"></span>
      Page
      <select [(ngModel)]="selectedValue" (ngModelChange)="navigateTo()">
        <option *ngFor="let page of pages" [ngValue]="page">{{ page.name }}</option>
      </select>
      <span class="patterns-menu-divider"></span>
      <a>Implementation</a>
    </div>
  `
})
export class PagesComponent {

  constructor( private router: Router){}

  pages = [
    { name: "A", value: "a" },
    { name: "B", value: "b" }
  ];

  selectedValue:any;

  navigateTo(){
    if(this.selectedValue.value){
      this.router.navigate([`/patterns/page/${this.selectedValue.value}`]);
    }
  }

}