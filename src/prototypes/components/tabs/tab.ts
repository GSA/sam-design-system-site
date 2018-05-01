import { 
  Component, 
  ChangeDetectionStrategy, 
  ViewEncapsulation, 
  ViewContainerRef 
} from "@angular/core";

import { MdTab } from "@angular/material";

@Component({
  selector: 'sam-tab-next',
  template: `<ng-template><ng-content></ng-content></ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SamTab extends MdTab {
  constructor(_viewContainerRef: ViewContainerRef){
    super(_viewContainerRef);
  }
}