import {
  Component,
  OnInit,
  Input,
  ViewChild
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<samModal [showClose]="true" #modal1 [title]="modalConfig.title" [type]="'success'" [description]="modalConfig.description" [submitButtonLabel]="'Yes'" [cancelButtonLabel]="'No'" (onSubmit)="onModalClose()">
</samModal>
<samModal [showClose]="true" #modal2 [title]="modalConfig.title" [type]="'error'" [description]="modalConfig.description" [submitButtonLabel]="'Yes'" [cancelButtonLabel]="'No'" (onSubmit)="onModal2Close()">
</samModal>
<samModal [showClose]="true" #modal3 [title]="modalConfig.title" [type]="'warning'" [description]="modalConfig.description" [submitButtonLabel]="'Yes'" [cancelButtonLabel]="'No'" (onSubmit)="onModal3Close()">
</samModal>
<samModal [showClose]="true" #modal4 [title]="modalConfig.title" [type]="'info'" [description]="modalConfig.description" [submitButtonLabel]="'Yes'" [cancelButtonLabel]="'No'" (onSubmit)="onModal4Close()">
</samModal>
<button (click)="onModalInitClick()">Show Success Modal</button>
<button (click)="onModalInit2Click()">Show Error Modal</button>
<button (click)="onModalInit3Click()">Show Warning Modal</button>
<button (click)="onModalInit4Click()">Show Info Modal</button>`;

@Component({
	selector: 'doc-modal',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class ModalExampleComponent extends BaseExampleComponent implements OnInit {
	modalConfig = {
		title: "Test Title",
		description: "Description Text"
	};
	@ViewChild('modal1') vcModal1;
	@ViewChild('modal2') vcModal2;
	@ViewChild('modal3') vcModal3;
	@ViewChild('modal4') vcModal4;
  typedoc_target = "modal.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
	onModalInitClick(){
		this.vcModal1.openModal();
	}
  onModalClose(){
    this.vcModal1.closeModal();
  }
  onModalInit2Click(){
		this.vcModal2.openModal();
	}
  onModal2Close(){
    this.vcModal2.closeModal();
  }
  onModalInit3Click(){
		this.vcModal3.openModal();
	}
  onModal3Close(){
    this.vcModal3.closeModal();
  }
  onModalInit4Click(){
		this.vcModal4.openModal();
	}
  onModal4Close(){
    this.vcModal4.closeModal();
  }
}