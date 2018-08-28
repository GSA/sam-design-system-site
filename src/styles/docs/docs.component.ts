import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  templateUrl: 'docs.template.html',
})
export class DocsComponent implements OnInit {

  sidenavModel = {
    label: 'Toggle Sidenav',
    icon: 'fa-bars'
  };

  constructor(private cdr: ChangeDetectorRef) {}

  public ngOnInit() {
    this.cdr.detectChanges();
  }
}
