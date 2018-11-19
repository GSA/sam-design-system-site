import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HierarchyPickerDemoComponent } from './hierarchy-picker-demo.component';

const routes: Route[] = [
  {
    path: '',
    component: HierarchyPickerDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HierarchyPickerDemoRoutingModule {}
