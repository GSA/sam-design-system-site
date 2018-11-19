import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HierarchyPickerDemoRoutingModule } from './hierarchy-picker-demo-routing.module';
import { HierarchyPickerDemoComponent } from './hierarchy-picker-demo.component';

@NgModule({
  imports: [
    CommonModule,
    HierarchyPickerDemoRoutingModule
  ],
  declarations: [
    HierarchyPickerDemoComponent
  ]
})
export class HierarchyPickerDemoModule {}
