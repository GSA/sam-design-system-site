
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
import { BaseExampleComponent } from '../../../baseexample.component';

//tabs/spacing matters for code example block
var code_example = `
<sam-actions-dropdown [actions]="actions"></sam-actions-dropdown>
  
<sam-actions-dropdown [disabled]="true"
  [actions]="actions"></sam-actions-dropdown>`;

@Component({
  selector: 'doc-sam-actions-dropdown',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">' + code_example + '</doc-template>'
})
export class SamActionsDropdownComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamActionsDropdownComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-it-loader!./documentation.md");
  example = code_example;
  actions: Array<any> = [
    { name: 'edit', label: 'Edit', icon: 'fa fa-pencil', callback: ()=>{console.log("edit");}},
    { name: 'delete', label: 'Delete', icon: 'fa fa-trash', callback: ()=>{console.log("delete");} },
    { name: 'save', label: 'Save', icon: 'fa fa-floppy-o', callback: ()=>{console.log("save");} }
  ];
}