import { Component} from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  templateUrl: 'page-settings.template.html'
})
export class PageASettingsComponent{
  radioModel: any = 'lorem';
  radioConfig = {
    options: [
      {value: 'help', label: 'SAM Help Section', name: 'radio-help'},
      {value: 'lorem', label: 'Lorem Ipsum', name: 'radio-lorem'}
    ],
    name: 'radio-settings',
    label: 'Select data',
    errorMessage: '',
    hint: ''
  };

  constructor(private pagesservice: PagesService){
    this.radioModel = this.pagesservice.PageA.value;
  }

  updateData(value){
    this.pagesservice.updatePageData("PageA", value);
  }

}