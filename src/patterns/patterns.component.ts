import { Component } from '@angular/core';

@Component({
  template:  `
    <router-outlet></router-outlet>
    <router-outlet name="codesection"></router-outlet>
  `
})
export class PatternsComponent { }
