import { Component} from '@angular/core';
import { MenuItem } from '../../../sam-ui-elements/src/ui-kit/components/sidenav';
import { SamMasterPageService } from '../../sam-ui-elements/sam-master-page.service';

@Component({
  templateUrl: 'page.template.html'
})
export class PageBComponent{

  constructor(private masterpageservice: SamMasterPageService){
    masterpageservice.docLink = "b-doc";
    masterpageservice.settingsLink = "a-settings";
  }

  breadcrumbs = [
    { breadcrumb: 'Consectetur adipiscing', url: '/' },
    { breadcrumb: 'Lorem ipsum dolor'}
  ];


}