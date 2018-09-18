
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
import {
  faTable,
  faHandsHelping,
  faHelicopter,
  faWheelchair,
  faPaintBrush,
  faChartLine,
  faPaperclip,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

// tabs/spacing matters for code example block
const code_example = `<div style="width:400px;">
  <h1>Without scroll</h1>
  <sam-tabs-next>
    <sam-tab-next tabTitle="Table" active="true">
      <span class="title">
        <sam-icon [icon]='faTable'></sam-icon> Table
      </span>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Quia quidem ipsum incidunt maxime! Magnam autem, dolorem
      hic incidunt voluptates amet voluptatem dolores maiores
      sit illum esse numquam unde omnis veritatis.
    </sam-tab-next>
    <sam-tab-next tabTitle="Assistance">
      <span class="title">
        <sam-icon [icon]='faHandsHelping'></sam-icon> Assistance
      </span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Mollitia itaque ad eos eaque at unde? Id alias consectetur
      itaque, odit hic amet at atque, praesentium quaerat
      soluta magni nesciunt explicabo.
    </sam-tab-next>
  </sam-tabs-next>
  </div>

  <div style="width:400px;">
  <h1>With scroll</h1>
  <sam-tabs-next>
    <sam-tab-next tabTitle="Table" active="true">
      <span class="title">
        <sam-icon [icon]='faTable'></sam-icon> Table
      </span>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Quia quidem ipsum incidunt maxime! Magnam autem, dolorem
      hic incidunt voluptates amet voluptatem dolores maiores
      sit illum esse numquam unde omnis veritatis.
    </sam-tab-next>
    <sam-tab-next tabTitle="Assistance">
      <span class="title">
        <sam-icon [icon]='faHandsHelping'></sam-icon> Assistance
      </span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Mollitia itaque ad eos eaque at unde? Id alias consectetur
      itaque, odit hic amet at atque, praesentium quaerat soluta
      magni nesciunt explicabo.
    </sam-tab-next>
    <sam-tab-next tabTitle="Support">
      <span class="title">
        <sam-icon [icon]='faHelicopter'></sam-icon> Support
      </span>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Libero distinctio earum vel repellat? Quisquam quibusdam,
      corporis nulla voluptatem nostrum consectetur neque,
      asperiores, repellat totam ipsum reiciendis quod ipsa
      quam molestiae!
    </sam-tab-next>
    <sam-tab-next tabTitle="Accessibility">
      <span class="title">
        <sam-icon [icon]='faWheelchair'></sam-icon> Accessibility
      </span>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Qui id non fuga consequuntur quos culpa odio cupiditate
      eius vero beatae sed perferendis est voluptatem explicabo
      labore ex, voluptates harum nobis!
    </sam-tab-next>
    <sam-tab-next tabTitle="Design">
      <span class="title">
        <sam-icon [icon]='faPaintBrush'></sam-icon> Design
      </span>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Dolorem necessitatibus, ducimus veniam dolores perspiciatis
      odit omnis rerum sunt ad placeat quos sed architecto dicta
      illum. Vitae necessitatibus qui aspernatur unde.
    </sam-tab-next>
    <sam-tab-next tabTitle="Statistics">
      <span class="title">
        <sam-icon [icon]='faChartLine'></sam-icon> Statistics
      </span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Facere, recusandae, dicta perferendis asperiores distinctio
      amet illum porro consectetur officia delectus ipsum
      blanditiis rerum repudiandae iste? Porro aperiam asperiores
      non molestias?
    </sam-tab-next>
    <sam-tab-next tabTitle="Backlog">
      <span class="title">
        <sam-icon [icon]='faPaperclip'></sam-icon> Backlog
      </span>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Blanditiis earum nihil harum ipsa, ducimus repellat quam,
      nesciunt quas aliquid quae, sit laboriosam praesentium
      recusandae et animi. Perferendis beatae vitae quidem!
    </sam-tab-next>
    <sam-tab-next tabTitle="Additional info">
      <span class="title">
        <sam-icon [icon]='faInfoCircle'></sam-icon> Additional info
      </span>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Facere eveniet ratione recusandae dolor. Dolor maiores
      possimus, consequatur cupiditate assumenda dicta veniam
      qui fugit ab mollitia quae laborum nesciunt quasi beatae.
    </sam-tab-next>
  </sam-tabs-next>
</div>`;

@Component({
  selector: 'doc-sam-tab-next',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">' + code_example + '</doc-template>'
})
export class SamTabsNextComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = 'SamTabsNextComponent';
  typedoc_content = '';
  faTable = faTable;
  faHandsHelping = faHandsHelping;
  faHelicopter = faHelicopter;
  faWheelchair = faWheelchair;
  faPaintBrush = faPaintBrush;
  faChartLine = faChartLine;
  faPaperclip = faPaperclip;
  faInfoCircle = faInfoCircle;

  example = code_example;

  public base = '_docs/experimental/tabs/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}

