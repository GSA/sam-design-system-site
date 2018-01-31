import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: "sam-icon",
  templateUrl: 'sam-icon.template.html'
})
export class SamIconComponent implements OnInit{
  
  @Input() public name: string;

  constructor(){}

  ngOnInit(){
    
  }

}