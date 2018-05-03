import {
  Component,
  Host,
  ViewEncapsulation,
  HostBinding,
  HostListener
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { MdExpansionPanelHeader } from '@angular/material';
import { SamExpansionPanelComponent, EXPANSION_PANEL_ANIMATION_TIMING} from './expansion-panel';

@Component({
  selector: 'sam-expansion-panel-header',
  templateUrl: 'expansion-panel-header.html',
  encapsulation: ViewEncapsulation.None,
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
export class SamExpansionPanelHeaderComponent extends MdExpansionPanelHeader {
  @HostBinding('class') hostClass = 'mat-expansion-panel-header';
  @HostBinding('attr.role') role = 'button';
  @HostBinding('attr.tabindex') tabindex = '0';
  @HostBinding('attr.aria-controls') ariaControls = this._getPanelId();
  @HostBinding('attr.aria-expanded') ariaExpanded = this._isExpanded();
  @HostBinding('class.mat-expanded') isExpanded() {
    return this._isExpanded();
  }
  @HostBinding('@expansionHeight') get getExpandedState() {
    return this._getExpandedState();
  }
  @HostListener('click') onClick() {
    this._toggle();
  }
  @HostListener('keyup', ['$event']) KeyUp($event) {
    this._keyup($event);
  }
  constructor(@Host() public panel: SamExpansionPanelComponent) {
    super(panel);
  }

}
