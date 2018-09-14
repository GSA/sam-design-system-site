
/* tslint:disable */
import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ViewChild,
  ViewRef,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

// tabs/spacing matters for code example block
const code_example = `<sam-filter-drawer (clear)="clearHandler()" (save)="saveHandler()">
  <sam-filter-drawer-item *ngFor="let filterItem of filters"
    [label]="filterItem.label"
    [values]="[filterItem.value]"
    (remove)="itemRemoveHandler($event)"
  ></sam-filter-drawer-item>
</sam-filter-drawer>
<p *ngIf="message">{{message}}</p>
<br/>
<button class="sam-ui button secondary"
  type="button"
  (click)="resetItems()"
  (keyup.enter)="resetItems()">Reset</button>`;

@Component({
  selector: 'doc-sam-filter-drawer-item',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">' + code_example + '</doc-template>'
})
export class SamFilterDrawerComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = 'SamFilterDrawerComponent';
  typedoc_content = '';
  filtersTemplate = [{
    id: 'aaa',
    label: 'item 1 label',
    value: 'item 1 value'
  },{
    id: 'bbb',
    label: 'item 2 label',
    value: 'item 2 value'
  },{
    id: 'ccc',
    label: 'item 3 label',
    value: 'item 3 value'
  }];
  filters = [];
  message = "";
  example = code_example;

  public base = '_docs/experimental/filter-drawer/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
    this.filters = this.filtersTemplate;
  }

  itemRemoveHandler(removedItem){
    this.filters = this.filters.filter((item)=>{
      if(item.id !== removedItem.id){
        return true
      }
    });
  }

  resetItems(){
    this.message = "";
    this.filters = this.filtersTemplate;
  }
  
  clearHandler(){
    this.message = "Clear event detected";
  }

  saveHandler(){
    this.message = "Save event detected";
  }
}

