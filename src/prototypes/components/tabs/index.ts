import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamTabsNextComponent, SamTabNextComponent } from './tabs.component';

@NgModule({
    declarations: [ SamTabsNextComponent, SamTabNextComponent ],
    exports: [ SamTabsNextComponent, SamTabNextComponent ],
    imports: [CommonModule]
})
export class SamTabsNextModule { }

export { SamTabsNextComponent, SamTabNextComponent } from './tabs.component';
