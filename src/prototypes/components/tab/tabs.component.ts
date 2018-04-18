import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { PrototypeTabComponent } from './tab.component';

@Component({
  selector: 'sam-prototype-tabs',
  template: `
  <ul class="prototype-tabs">
    <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
      <a href="javascript:void(0)">{{tab.title}}</a>
    </li>
  </ul>
  <ng-content></ng-content>
  `
})
export class PrototypeTabsComponent  implements AfterContentInit {

  @ContentChildren(PrototypeTabComponent) tabs: QueryList<PrototypeTabComponent>;

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: PrototypeTabComponent) {
    this.tabs.toArray().forEach(tabItem => tabItem.active = false);
    tab.active = true;
  }
}
