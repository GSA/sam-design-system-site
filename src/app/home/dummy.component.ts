import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
@Component({
  selector: 'dummy', 
  template: `<div>dummy comp {{testInput}}</div>`
})
export class DummyComponent implements OnInit {
  @Input() testInput = "mm";
  public ngOnInit() {
  }
  dummyfunction(){
    return true;
  }
}