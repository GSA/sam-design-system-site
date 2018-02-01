import { Component} from '@angular/core';
import { MenuItem } from '../../../sam-ui-elements/src/ui-kit/components/sidenav';
import { SamMasterPageService } from '../../sam-ui-elements/future/master-page';
import { PagesService } from '../pages.service';

@Component({
  templateUrl: 'page.template.html'
})
export class PageAComponent{

  constructor(
    private masterpageservice: SamMasterPageService, 
    private pagesservice: PagesService){
    masterpageservice.docLink = "a-doc";
    masterpageservice.settingsLink = "a-settings";
  }

}