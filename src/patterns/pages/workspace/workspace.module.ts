import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceService } from './data/workspace.service';
import { SamWorkspaceDemoComponent } from './workspace.component';
import { SamUIKitModule, SamFilterModule } from '@gsa-sam/sam-ui-elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SamUIKitModule,
    SamFilterModule,
  ],
  declarations: [SamWorkspaceDemoComponent],
  providers: [WorkspaceService],
  exports: [SamWorkspaceDemoComponent],
})
export class WorkspaceModule {}
