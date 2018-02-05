import { Component} from '@angular/core';

import { SamMasterPageService } from '../../../../sam-ui-elements/src/ui-kit/future/master-page';
import { MenuItem } from '../../../../sam-ui-elements/src/ui-kit/components/sidenav';
import { PagesService } from '../pages.service';

@Component({
  templateUrl: 'page.template.html'
})
export class PageAComponent{

  sidenavModel: MenuItem = {
    label: "SideNavigation",
    children: [
      {
        label: "New to beta.SAM.gov",
        route: "#",
        children: [
          {
            label: "Features",
            route: "#"
          },
          {
            label: "User Accounts",
            route: "#"
          },
          {
            label: "About Us",
            route: "#"
          },
          {
            label: "What's Next",
            route: "#"
          }
        ]
      },
      {
        label: "Award Domains",
        route: "#"
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
    masterpageservice.docLink = "a-doc";
    masterpageservice.settingsLink = "a-settings";
  }

}