import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: "master-page",
  templateUrl: 'master-page.template.html'
})
export class MasterPageComponent{
  @Output() menuClicked = new EventEmitter<boolean>();
  
  settingsClicked(){
    this.menuClicked.emit(true)
  }
}