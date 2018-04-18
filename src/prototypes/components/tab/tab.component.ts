import { Component, Input, Output, EventEmitter, HostBinding} from '@angular/core';
import { trigger, state, style, animate, transition, query } from '@angular/animations';

@Component({
  selector: 'sam-prototype-tab',
  template: `
  <div class="prototype-tab" *ngIf="active">
    <ng-content></ng-content>
  </div>
  `,
})
export class PrototypeTabComponent {
  @Input() title: string;
  @Input() active: boolean = false;
}
