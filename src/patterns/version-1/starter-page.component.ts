import { Component} from '@angular/core';

@Component({
  templateUrl: 'starter-page.template.html',
})
export class StarterPageComponent{
  showSection = ['basic-page-code'];
  toggleCode(){
    if(this.showSection != null) {
      this.showSection = null;
    }else{
      this.showSection = ['basic-page-code'];
    }
  }
}

let code_example = `
<page title="Lorem ipsum dolor sit amet">
  <p>
  Quisque lacinia commodo neque et suscipit. Integer rutrum mauris ex, non 
  ornare leo interdum nec. Suspendisse vitae tor...
  </p>
</page>`;

@Component({
  template: `
  <div style="padding: 40px; border-top:2px dashed #ccc; background-color: #eaeaea;">
    <div class="container">
      <h3 class="sam-ui header">Basic Page Code</h3>
      <code-example language="html" [code]="code"></code-example>
    </div>
  </div>
  `,
})
export class BasicPageCodeComponent{
  code: string = code_example;
}