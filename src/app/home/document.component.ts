import {
  Component,
  Input,
  OnInit
} from '@angular/core';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'document',  // <home></home>
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: `
    <div [innerHTML]='markdown'></div>
    <div>
      <ng-content></ng-content>
    </div>
    <p>Accordion Start</p>
    <pre>{{example}}</pre>
    <p>Accordion End</p>
  `
})
export class DocumentComponent implements OnInit {
  @Input() markdown: string = null;
  @Input() example: string = null;
  @Input() typedocData: any;



  constructor() {}

  public ngOnInit() {
  }

}
