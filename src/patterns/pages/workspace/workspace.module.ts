import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceService } from './data/workspace.service';
import { SamWorkspaceDemoComponent } from './workspace.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SamWorkspaceDemoComponent
  ],
  providers: [WorkspaceService],
  exports: [
    SamWorkspaceDemoComponent
  ]
})
export class WorkspaceModule { }
