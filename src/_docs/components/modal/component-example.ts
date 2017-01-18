import {
  Component,
  OnInit,
  Input,
  ViewChild
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-modal',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
<samModal [showClose]="true" #modal1 [title]="modalConfig.title" [type]="modalConfig.type" [description]="modalConfig.description" [submitButtonLabel]="'Yes'" [cancelButtonLabel]="'No'" (onSubmit)="onModalClose()">
</samModal>
<button (click)="onModalInitClick()">Show Modal</button>
</doc-template>
`
})
export class ModalExampleComponent extends BaseExampleComponent implements OnInit {
	modalConfig = {
		title: "Test Title",
		type: "success",
		description: "Description Text"
	};
	@ViewChild('modal1') vcModal1;
  typedoc_target = "modal.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<samModal [showClose]="true" #modal1 [title]="modalConfig.title" [type]="modalConfig.type" [description]="modalConfig.description" [submitButtonLabel]="'Yes'" [cancelButtonLabel]="'No'" (onSubmit)="onModalClose()">
</samModal>
<button (click)="onModalInitClick()">Show Modal</button>`;
	onModalInitClick(){
		this.vcModal1.openModal();
	}
  onModalClose(){
    this.vcModal1.closeModal();
  }
}