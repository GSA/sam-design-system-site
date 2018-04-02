import { Component } from '@angular/core';
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
  <router-outlet></router-outlet>
  <div class="patterns-menu">
    <a routerLink="/prototypes">Prototypes</a>
    <span class="patterns-menu-divider"></span>
    <select class="sam transition" [(ngModel)]="selectedOption" (ngModelChange)="navigateTo()">
      <option *ngFor="let option of options" [ngValue]="option">
        {{ option.name }}
      </option>
    </select>
  </div>
  `
})
export class ComponentsComponent {
  
  selectedOption:any;

  options = [
    { name: "Picker", value: "picker" },
    { name: "Main Nav", value: "main-nav" },
  ];

  routerSubscription: any;

  constructor(private router: Router){
    this.routerSubscription = router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
        const tree: UrlTree = router.parseUrl(event.url);
        const group: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
        const segment: UrlSegment[] = group.segments;
        this.selectOption(segment[2].path);
      }
    });
  }

  selectOption(value){
    this.options.forEach(option => {
      if(option.value === value){
        this.selectedOption = option;
      }
    });
  }

  navigateTo(){
    if(this.selectedOption.value){
      this.router.navigate([`/prototypes/component/${this.selectedOption.value}`]);
    }
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}