import { Component } from '@angular/core';
import { PagesService } from './pages.service';

@Component({
  template:  `
    <sam-master-page>
      <router-outlet></router-outlet>
    </sam-master-page>
  `,
  providers: [PagesService]
})
export class PagesComponent {

  constructor(private pagesservice: PagesService){}

}