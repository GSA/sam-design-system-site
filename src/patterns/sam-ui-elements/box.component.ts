import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: "sam-ui-box",
  template: `
  <div class="sam-ui box" [ngClass]="type">
    <ng-content></ng-content>
  </div>
  `
})
export class SAMUIBoxComponent implements OnInit{
  
  @Input() public type: string;

  constructor(){}

  ngOnInit(){
    
  }

}