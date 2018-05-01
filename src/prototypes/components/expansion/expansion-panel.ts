import { 
  Component, 
  ViewEncapsulation,
  Host,
  Optional,
  forwardRef,
  Input
} from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {SamAccordion} from './accordion';
import {MdExpansionPanel, AccordionItem} from "@angular/material";
import {UniqueSelectionDispatcher} from "@angular/material";
import {Subject} from 'rxjs/Subject';

export const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';

@Component({
  selector: 'sam-expansion-panel',
  templateUrl: 'expansion-panel.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'mat-expansion-panel',
    '[class.mat-expanded]': 'expanded',
    '[@displayMode]': '_getDisplayMode()',
  },
  providers: [
    {provide: AccordionItem, useExisting: forwardRef(() => SamExpansionPanel)}
  ],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed', style({height: '0px'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate(EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
    trigger('displayMode', [
      state('collapsed', style({margin: '0'})),
      state('default', style({margin: '16px 0'})),
      state('flat', style({margin: '0'})),
      transition('flat <=> collapsed, default <=> collapsed, flat <=> default',
                 animate(EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
  ],
})
export class SamExpansionPanel extends MdExpansionPanel {
  
  constructor(@Optional() @Host() accordion: SamAccordion,
              _uniqueSelectionDispatcher: UniqueSelectionDispatcher) {
    super(accordion, _uniqueSelectionDispatcher);
  }

}