import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamTabsNextComponent, SamTabNextComponent } from './tabs.component';
import { SamExperimentalModule } from '@gsa-sam/sam-ui-elements';

@NgModule({
    declarations: [ SamTabsNextComponent, SamTabNextComponent ],
    exports: [ SamTabsNextComponent, SamTabNextComponent ],
    imports: [CommonModule,SamExperimentalModule]
})
export class SamTabsNextModule { }

export { SamTabsNextComponent, SamTabNextComponent } from './tabs.component';
