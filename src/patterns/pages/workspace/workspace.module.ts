import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceService } from './data/workspace.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [WorkspaceService]
})
export class WorkspaceModule { }
