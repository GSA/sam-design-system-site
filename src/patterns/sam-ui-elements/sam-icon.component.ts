import { Component, Input} from '@angular/core';

@Component({
  selector: "sam-icon",
  templateUrl: 'sam-icon.template.html'
})
export class SamIconComponent{
  
  @Input() public name: string;

}