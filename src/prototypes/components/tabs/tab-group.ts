import { 
  Component, 
  Renderer2,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  ContentChildren,
  QueryList
} from '@angular/core';

import { MdTabGroup } from '@angular/material';
import { SamTab } from './tab';

@Component({
  selector: 'sam-tab-group',
  templateUrl: 'tab-group.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'mat-tab-group',
    '[class.mat-tab-group-dynamic-height]': 'dynamicHeight'
  }
})
export class SamTabGroup extends MdTabGroup {

  @Input() dynamicHeight = true;
  @Input() disableRipple = true;

  @ContentChildren(SamTab) _tabs: QueryList<SamTab>;
  
  constructor(_renderer: Renderer2) {
    super(_renderer);
  }
  
}