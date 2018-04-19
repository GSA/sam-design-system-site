import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { PrototypePanelComponent } from './panel.component';

@Component({
  selector: 'sam-prototype-accordion',
  template: `
  <div class="prototype-accordion">
    <ng-content></ng-content>
  </div>
  `
})
export class PrototypeAccordionComponent  implements AfterContentInit {

  @ContentChildren(PrototypePanelComponent) panels: QueryList<PrototypePanelComponent>;

  ngAfterContentInit() {
    this.panels.toArray()[0].opened = true;
    this.panels.toArray().forEach((panel: PrototypePanelComponent) => {
      panel.toggle.subscribe(() => {
        this.openPanel(panel);
      });
    });
  }

  openPanel(panel: PrototypePanelComponent) {
    this.panels.toArray().forEach(p => p.opened = false);
    panel.opened = true;
  }
}
