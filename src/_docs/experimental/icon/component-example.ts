
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
import {
  faHome,
  faUser,
  faSearch,
  faCog,
  faVideo,
  faComment,
  faNewspaper,
  faBook
} from '@fortawesome/free-solid-svg-icons';
import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example_1 = `
<sam-icon [icon]="faHome"></sam-icon>
<sam-icon [icon]="faUser" size="lg"></sam-icon>
<sam-icon [icon]="faSearch" size="2x"></sam-icon>
<sam-icon [icon]="faCog" size="4x"></sam-icon>
<sam-icon [icon]="faVideo" size="8x"></sam-icon>
<sam-icon [icon]="faComment" fixedWidth="true"></sam-icon>
<sam-icon [icon]="faNewspaper" rotate="90"></sam-icon>
<sam-icon [icon]="faBook" spin="true"></sam-icon>
`;

const code_example_2 = `
<sam-icon [icon]="faUser"></sam-icon>
`;

const code_example_3 = `
<sam-icon [icon]="faSearch"></sam-icon>
`;

@Component({
  selector: 'doc-sam-icon',
  template: `
    <doc-template [markdown]="markdown" [example]="" [typedoc]="typedoc_content">

     <div class="sam-ui warning message">
        <div class="header">
          Warning
        </div>
        <p>
          This component is under development.
        </p>
      </div>

      <h3 class="sam-ui dividing header">Available</h3>

      <sam-code-example language="html" [code]="example_1">
      ` + code_example_1 + `
      </sam-code-example>

    </doc-template>`
})
export class SamIconComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = 'SamIconComponent';
  typedoc_content = '';

  example_1 = code_example_1.trim();
  example_2 = code_example_2.trim();
  example_3 = code_example_3.trim();
  faHome = faHome;
  faUser = faUser;
  faSearch = faSearch;
  faCog = faCog;
  faVideo = faVideo;
  faComment = faComment;
  faNewspaper = faNewspaper;
  faBook = faBook;

  public base = '_docs/experimental/icon/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
