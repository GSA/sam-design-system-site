
import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ViewChild,
  ViewRef,
  TemplateRef,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { SamAlertFooterService } from '../../../../sam-ui-elements/src/ui-kit/components/alert-footer/alert-footer.service';
import { DocumentationService } from '../../../app/services/documentation.service';
import { Http } from '@angular/http';

//tabs/spacing matters for code example block
var code_example = `
<sam-text 
  label="Title" 
  name="title" 
  [(ngModel)]="footerAlertModel.title" 
  type="text">
</sam-text>
<sam-text 
  label="Description" 
  name="Description" 
  [(ngModel)]="footerAlertModel.description" 
  type="text">
</sam-text>
<sam-select 
  label="Type" 
  name="Type" 
  [options]="footerAlertTypes" 
  [(ngModel)]="footerAlertModel.type">
</sam-select>
<sam-number 
  label="Dismiss Timer" 
  hint="in milliseconds, 0 is infinite" name="Dismiss Timer" 
  [(ngModel)]="footerAlertModel.timer">
</sam-number>
<sam-button (click)="onFooterAlertBtnClick()" buttonText="Add Footer alert"></sam-button>`;

@Component({
  selector: 'doc-sam-alert-footer',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">' + code_example + '</doc-template>'
})
export class SamAlertFooterComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamAlertFooterComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-it-loader!./documentation.md");
  example = code_example;
  footerAlertModel = {
    title: "test title",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "error",
    timer: 0
  };
  footerAlertTypes = [{
    label:'success',
    name:'success',
    value:'success',
  },{
    label:'warning',
    name:'warning',
    value:'warning',
  },{
    label:'error',
    name:'error',
    value:'error',
  },{
    label:'info',
    name:'info',
    value:'info',
  }];
  constructor(_http:Http, 
    service:DocumentationService,
    private alertFooterService:SamAlertFooterService){
    super(_http,service);
  }
  onFooterAlertBtnClick(){
    this.alertFooterService.registerFooterAlert(JSON.parse(JSON.stringify(this.footerAlertModel)));
  }
}