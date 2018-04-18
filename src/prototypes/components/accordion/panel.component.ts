import { Component, Input, Output, EventEmitter, HostBinding} from '@angular/core';
import { trigger, state, style, animate, transition, query } from '@angular/animations';

@Component({
  selector: 'sam-prototype-panel',
  template: `
  <div class="prototype-panel">
    <div class="prototype-panel-heading" [ngClass]="{ 'active': opened }" (click)="toggle.emit()">
      {{title}}
    </div>
    <div class="prototype-panel-body" [@panelContent]="opened" *ngIf="opened">
      <ng-content></ng-content>
    </div>
  </div>
  `,
  animations: [
    trigger('panelContent', [
      transition(':enter', [
        query(':self', [
          style({
            opacity: 0 ,
            height: 0,
            marginTop: 0,
            marginBottom: 0
          }),
          animate('200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({
            opacity: 1,
            height: '*',
            marginTop: '*',
            marginBottom: '*',
          }))
        ])
      ]),
      transition(':leave', [
        query(':self', [
          style({
            opacity: 1,
            height: '*',
            marginTop: '*',
            marginBottom: '*',
          }),
          animate('200ms ease-out', style({
            opacity: 0 ,
            height: 0,
            marginTop: 0,
            marginBottom: 0
          }))
        ])
      ])
    ])
  ]
})
export class PrototypePanelComponent {
  public opened: boolean = false;
  @Input() title: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}
