import { Component} from '@angular/core';

import { MenuItem } from '@gsa-sam/sam-ui-elements/src/ui-kit/components/sidenav';

@Component({
  templateUrl: 'title-options.template.html',
})
export class TitleOptionsPageComponent {
  showSection = ['title-options-code'];
  toggleCode() {
    if (this.showSection != null) {
      this.showSection = null;
    } else {
      this.showSection = ['title-options-code'];
    }
  }

}


const code_example = `
<page
  title="Lorem ipsum dolor sit amet"
  section="Consectetur adipiscing elit"
  badge="Commodo neque"
  typeLabel="Nam sollicitudin"
  type="sit amet">

  <p>
  Quisque lacinia commodo neque et suscipit. Integer rutrum mauris ex, non
  ornare leo interdum nec. Suspendisse vitae tor...
  </p>

</page>`;

@Component({
  template: `
  <div style="padding: 40px; border-top:2px dashed #ccc; background-color: #eaeaea;">
    <div class="container">
      <h3 class="sam-ui header">Page with all available title options</h3>
      <sam-code-example language="html" [code]="code"></sam-code-example>
    </div>
  </div>
  `,
})
export class TitleOptionsPageCodeComponent {
  code: string = code_example;
}
