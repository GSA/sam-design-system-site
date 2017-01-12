import {
  Component,
  OnInit
} from '@angular/core';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  // TypeScript public modifiers
  constructor() {}

  public ngOnInit() {
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {

  }
}
