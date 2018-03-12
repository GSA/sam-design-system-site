import { Component} from '@angular/core';

import { SamMasterPageService } from '../../../../sam-ui-elements/src/ui-kit/experimental/master-page';
import { MenuItem } from '../../../../sam-ui-elements/src/ui-kit/components/sidenav';
import { PagesService } from '../pages.service';

@Component({
  templateUrl: 'page.template.html'
})
export class PageBComponent{

  sidenavModel: MenuItem = {
    label: "SideNavigation",
    children: [
      {
        label: "New to beta.SAM.gov?",
        route: "#"
      },
      {
        label: "Award Domains",
        route: "#",
        children: [
          {
            label: "Assistance Listings",
            route: "#"
          },
          {
            label: "Contract Opportunities",
            route: "#"
          }
        ]
      },
      {
        label: "External Resources",
        route: "#"
      },
      {
        label: "Customer Support",
        route: "#"
      }
    ]
  };

  constructor(
    private masterpageservice: SamMasterPageService,
    private pagesservice: PagesService){
    masterpageservice.docLink = "b-doc";
    masterpageservice.settingsLink = "a-settings";
  }

}