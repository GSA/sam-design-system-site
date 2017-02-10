import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<div class="usa-grid-full">
  <div class="usa-width-one-third">
    <div>
      <input type="checkbox" id="toggle-menu" (change)="store.menu.open = !store.menu.open">
      <label for="toggle-menu" [innerText]="store.menu.open ? 'Close Menu' : 'Open Menu'"></label>
    </div>
    <sam-header-menu [items]="store.menu.items" [(open)]="store.menu.open"></sam-header-menu>
  </div>
</div>`;
@Component({
	selector: 'doc-header',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
` + code_example + `
</doc-template>
`
})
export class HeaderMenuExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamHeaderMenuComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;//code example in app
  store = {
    menu: {
      open: false,
      items: [
        { text: 'Menu Item 1', routerLink: '/ui-kit' },
        { text: 'Menu Item 2', routerLink: '/ui-kit' }
      ]
    }
  };
}