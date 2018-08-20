
import {
  Component,
  OnInit
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const example1_model = `[
  {
    label: 'Share',
    icon: 'fa-share-alt'
  },
  {
    label: 'Download',
    icon: 'fa-download'
  },
  {
    label: 'Save',
    icon: 'fa-cloud'
  },
  {
    label: 'Toggle',
    icon: 'fa-bars'
  }
]`;

const example2_model = `[
  {
    label: 'Share',
    icon: 'fa-share-alt',
    disabled: true
  },
  {
    label: 'Download',
    icon: 'fa-download',
    disabled: true
  },
  {
    label: 'Save',
    icon: 'fa-cloud',
    disabled: true
  },
  {
    label: 'Toggle',
    icon: 'fa-bars',
    disabled: true
  }
]`;


const example = `
<h2>Basic Example</h2>
<sam-actions
  [contentModel]="${example1_model}"
  (action)="actionHandler($event)"
></sam-actions>

<h2>Disabled State</h2>
<sam-actions
  [contentModel]="${example2_model}"
  (action)="actionHandler($event)"
></sam-actions>`;

@Component({
  selector: 'doc-sam-box',
  template: `
    <doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
    ${example}
    </doc-template>`
})
export class SamActionsListComponentExampleComponent extends BaseExampleComponent implements OnInit {

  typedoc_target = 'SamActionsListComponent';
  typedoc_content = '';
  markdown= '';

  example = example;

  public base = '_docs/experimental/actions-list/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }

  public actionHandler (action) {
    window.alert(JSON.stringify(action));
  }
}
