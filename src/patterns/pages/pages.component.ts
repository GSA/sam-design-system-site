import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  template:  `
    <master-page (menuClicked)="toggleSettings($event)">
      <router-outlet></router-outlet>
    </master-page>
    <router-outlet name="settings"></router-outlet>
  `
})
export class PagesComponent { 

  settingsOn: boolean;

  constructor(private router: Router, private route: ActivatedRoute){} 

  public settings() {
    this.settingsOn = true;
    this.router.navigate([{ outlets: { settings: ['page-a'] } }], {relativeTo:this.route})
  }

  public hideSettings() {
    this.settingsOn = false;
    this.router.navigate([{ outlets: { settings: null } }], {relativeTo:this.route} )
  }

  public toggleSettings(){
    if(this.settingsOn){
      this.hideSettings();
    }else{
      this.settings();
    }
  }

}