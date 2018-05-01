import { 
  Component, 
  Host,
  ViewEncapsulation,
} from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { MdExpansionPanelHeader } from "@angular/material";
import { SamExpansionPanel, EXPANSION_PANEL_ANIMATION_TIMING} from './expansion-panel';

@Component({
  selector: 'sam-expansion-panel-header',
  templateUrl: 'expansion-panel-header.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'mat-expansion-panel-header',
    'role': 'button',
    'tabindex': '0',
    '[attr.aria-controls]': '_getPanelId()',
    '[attr.aria-expanded]': '_isExpanded()',
    '[class.mat-expanded]': '_isExpanded()',
    '(click)': '_toggle()',
    '(keyup)': '_keyup($event)',
    '[@expansionHeight]': '_getExpandedState()',
  },
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed', animate(EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
    trigger('expansionHeight', [
      state('collapsed', style({height: '44px', 'line-height': '44px'})),
      state('expanded', style({height: '44px', 'line-height': '44px'})),
      transition('expanded <=> collapsed', animate(EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
  ],
})
export class SamExpansionPanelHeader extends MdExpansionPanelHeader {

  constructor(@Host() public panel: SamExpansionPanel) {
    super(panel);
  }

}