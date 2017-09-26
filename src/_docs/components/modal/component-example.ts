import {
  Component,
  OnInit,
  Input,
  ViewChild
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<sam-modal 
  [showClose]="true" 
  #modal1 
  [title]="modalConfig.title" 
  [type]="'success'" 
  [description]="modalConfig.description" 
  [submitButtonLabel]="'Ok'" 
  (onClose)="message='Success modal closed'"
  (onSubmit)="onModalClose()">
</sam-modal>
<sam-modal 
  [showClose]="true" 
  #modal2 
  [title]="modalConfig.title" 
  [type]="'error'" 
  [description]="modalConfig.description" 
  [submitButtonLabel]="'Ok'" 
  (onClose)="message='Error modal closed'"
  (onSubmit)="onModal2Close()">
</sam-modal>
<sam-modal 
  [showClose]="true" 
  #modal3 
  [title]="modalConfig.title" 
  [type]="'warning'" 
  [description]="modalConfig.description" 
  [submitButtonLabel]="'Yes'" 
  [cancelButtonLabel]="'No'" 
  (onClose)="message='Warning modal closed'"
  (onSubmit)="onModal3Close()">
</sam-modal>
<sam-modal 
  [showClose]="true" 
  #modal4 
  [title]="modalConfig.title" 
  [type]="'info'" 
  [submitButtonLabel]="'Yes'" 
  [cancelButtonLabel]="'No'" 
  (onClose)="message='Info modal closed'"
  (onSubmit)="onModal4Close()">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero, esse ratione quis quasi commodi distinctio sit aut eum facilis minima hic saepe ut ex, aliquid minus non maxime quod!
</sam-modal>
<sam-modal [showClose]="true" #modal5 [title]="modalConfig2.title" [type]="modalConfig2.type" [description]="modalConfig2.description" [submitButtonLabel]="'Yes'" [cancelButtonLabel]="'No'" (onSubmit)="onModal5Close()">
</sam-modal>

<p>{{message}}</p>

<sam-button buttonText="Show Success Modal" (click)="onModalInitClick()"></sam-button><br/>
<sam-button buttonText="Show Error Modal" (click)="onModalInit2Click()"></sam-button><br/>
<sam-button buttonText="Show Warning Modal" (click)="onModalInit3Click()">Show Warning Modal</sam-button><br/>
<sam-button buttonText="Show Info Modal" (click)="onModalInit4Click()"></sam-button>
<hr/>
<sam-text label="Title" [(ngModel)]="modalConfig2.title" name="title"></sam-text>
<sam-text label="Description" [(ngModel)]="modalConfig2.description" name="description"></sam-text>
<sam-select label="Type" name="type" [(ngModel)]="modalConfig2.type" [options]="modalAlertTypes">
</sam-select>
<sam-button (click)="onModal5InitClick()" buttonText="Show Modal"></sam-button>
`;

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
	@ViewChild('modal5') vcModal5;
  typedoc_target = "SamModalComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-it-loader!./documentation.md");
  example = code_example;
  message = "";
  modalAlertTypes = [{
    label:'success',
    name:'success',
    value:'success'
  },{
    label:'warning',
    name:'warning',
    value:'warning'
  },{
    label:'error',
    name:'error',
    value:'error'
  },{
    label:'info',
    name:'info',
    value:'info'
  }];
  modalConfig2 = {
    type:'success',
    title:'Sample Title',
    description:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'
  };
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
  onModal5InitClick(){
    this.vcModal5.openModal();
  }
  onModal5Close(){
    this.vcModal5.closeModal();
  }
}