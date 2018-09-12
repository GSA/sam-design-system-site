import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  templateUrl: 'docs.template.html',
})
export class DocsComponent implements OnInit {

  sidenavModel = {
    label: 'Toggle Sidenav',
    icon: 'fa-chevron-circle-left'
  };

  constructor(private cdr: ChangeDetectorRef) {}

  public ngOnInit() {
    this.cdr.detectChanges();
  }
}
