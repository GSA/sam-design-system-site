import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: "sam-box",
  template: `
  <div class="sam-ui box" [ngClass]="type">
    <ng-content></ng-content>
  </div>
  `
})
export class SamBoxComponent implements OnInit{
  
  @Input() public type: string;

  constructor(){}

  ngOnInit(){
    
  }

}