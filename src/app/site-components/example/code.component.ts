import { Component, AfterViewInit, Input, Renderer2, ElementRef } from '@angular/core';
import { read } from 'fs';

import * as Prism from 'prismjs';

@Component({
  selector: 'code-example',
  template: `<ng-content></ng-content>`,
})
export class CodeExampleComponent implements AfterViewInit{
  @Input() public code: string;
  @Input() public language: string;

  private preNode: Node;
  private codeNode: Node;
  private nativeElement: Node;

  constructor(
    private _renderer: Renderer2,
    private _el: ElementRef) {
    this.nativeElement = _el.nativeElement;
  }

  public ngAfterViewInit () {
    this.preNode = this._renderer.createElement('pre');
    this.codeNode = this._renderer.createElement('code');
    this._renderer.addClass(this.codeNode, 'language-' + this.language);
    this._renderer.appendChild(this.nativeElement, this.preNode);
    this._renderer.appendChild(this.preNode, this.codeNode);
    this.codeNode.textContent = this.code.trim();
    Prism.highlightElement(this.codeNode);
  }

}
