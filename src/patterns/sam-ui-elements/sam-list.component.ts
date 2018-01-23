import { Component, Input, OnInit} from '@angular/core';
import {trigger, state, transition, query, style, stagger, animate} from "@angular/animations";

@Component({
  selector: "sam-list",
  animations: [
    trigger('listAnimation', [
      state('void', style({
        opacity: 0  
      })),
      state('*', style({
        opacity: 1  
      })),
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true}),
        query(':enter', stagger('100ms', [
          animate('1s', style({ opacity: 1 }))
        ]), { optional: true })
      ])
    ])
  ],
  template: `
  <!-- <button (click)="toggle()">Toggle</button> -->
  <ul class="sam-ui list-next" [ngClass]="orientation" [@listAnimation]="listItems.length">
    <li *ngFor="let item of listItems">
      <a *ngIf="item.link; else isNotLink">
        <sam-icon *ngIf="item.icon" [name]="item.icon"></sam-icon>
        {{ item.text }}
      </a>
      <ng-template #isNotLink>
        <sam-icon *ngIf="item.icon" [name]="item.icon"></sam-icon>
        {{ item.text }}
      </ng-template>
    </li>
  </ul> 
  `
})
export class SAMListComponent implements OnInit{
  
  @Input() public items: any;
  @Input() public orientation: string;
  
  listItems = [];

  constructor(){}
  
  ngOnInit(){
    this.toggle();
  }

  hideItems(){
    this.listItems = [];
  }

  showItems(){
    this.listItems = this.items;
  }

  toggle() { 
    this.listItems.length ? this.hideItems() : this.showItems(); 
  } 
  
}