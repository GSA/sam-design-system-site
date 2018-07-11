
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
import { SamAlertFooterService } from '@gsa-sam/sam-ui-elements/src/ui-kit/components/alert-footer/alert-footer.service';
import { DocumentationService } from '../../../app/services/documentation.service';
import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';

// tabs/spacing matters for code example block
const code_example = `
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
<sam-checkbox
  name="require-dismiss"
  [options]="checkboxOptions"
  label="Require user dismissal"
  hint="Overrides dismiss timer, require user to dismiss the alert"
  [ngModel]="checkboxVal"
  (ngModelChange)="mustDimissHandler($event)">
</sam-checkbox>
<sam-button (click)="onFooterAlertBtnClick()" buttonText="Add Footer alert"></sam-button>`;

@Component({
  selector: 'doc-sam-alert-footer',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">' + code_example + '</doc-template>'
})
export class SamAlertFooterComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = 'SamAlertFooterComponent';
  typedoc_content = '';

  example = code_example;
  checkboxOptions = [{name: 'Enabled', label: 'Enabled', value: true}];
  checkboxVal = false;
  footerAlertModel = {
    title: 'test title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    type: 'error',
    timer: 0,
    mustDismiss: false
  };
  footerAlertTypes = [{
    label: 'success',
    name: 'success',
    value: 'success',
  }, {
    label: 'warning',
    name: 'warning',
    value: 'warning',
  }, {
    label: 'error',
    name: 'error',
    value: 'error',
  }, {
    label: 'info',
    name: 'info',
    value: 'info',
  }];


  public base = '_docs/components/alert-footer/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService,
    private alertFooterService: SamAlertFooterService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }

  mustDimissHandler(item) {
    if (item && item.length > 0) {
      this.footerAlertModel.mustDismiss = true;
    } else {
      this.footerAlertModel.mustDismiss = false;
    }
  }
  onFooterAlertBtnClick() {
    this.alertFooterService.registerFooterAlert(JSON.parse(JSON.stringify(this.footerAlertModel)));
  }
}
