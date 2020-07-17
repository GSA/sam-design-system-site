/* tslint:disable */
import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'doc-sam-checkbox-list',
  templateUrl: './component-example.html',
})
export class SamListboxComponentExampleComponent {
  public selectItems1: any[] = [];
  public selectItems2: any[] = [];
  public options = [
    {
      name: 'id1',
      value: 'test1',
      label: 'test-id1',
      required: false,
      checked: false,
    },
    {
      name: 'id2',
      value: 'test2',
      label: 'test-id2',
      required: true,
      checked: true,
    },
    {
      name: 'id3',
      value: 'test3',
      label: 'test-id3',
      required: false,
      checked: false,
    },
    {
      name: 'id4',
      value: 'test4',
      label: 'test-id4',
      required: false,
      checked: false,
    },
    {
      name: 'id5',
      value: 'test5',
      label: 'test-id5',
      required: false,
      checked: true,
    },
    {
      name: 'id6',
      value: 'test6',
      label: 'test-id6',
      required: false,
      checked: false,
    },
    {
      name: 'id7',
      value: 'test7',
      label: 'test-id7',
      required: false,
      checked: false,
    },
    {
      name: 'id8',
      value: 'test8',
      label: 'test-id8',
      required: false,
      checked: false,
    },
  ];

  public options1 = [
    {
      name: 'id1',
      value: 'test1',
      label: 'test-id1',
      required: false,
      checked: false,
    },
    {
      name: 'id2',
      value: 'test2',
      label: 'test-id2',
      required: true,
      checked: true,
    },
    {
      name: 'id3',
      value: 'test3',
      label: 'test-id3',
      required: false,
      checked: false,
    },
    {
      name: 'id4',
      value: 'test4',
      label: 'test-id4',
      required: false,
      checked: false,
    },
    {
      name: 'id5',
      value: 'test5',
      label: 'test-id5',
      required: false,
      checked: false,
    },
    {
      name: 'id6',
      value: 'test6',
      label: 'test-id6',
      required: false,
      checked: false,
    },
    {
      name: 'id7',
      value: 'test7',
      label: 'test-id7',
      required: false,
      checked: false,
    },
    {
      name: 'id8',
      value: 'test8',
      label: 'test-id8',
      required: false,
      checked: false,
    },
  ];

  public ngOnInit() {
    this.selectItems2 = this.options.filter((item) => item.checked);
    this.selectItems1 = this.options1.filter((item) => item.checked);
  }
}
