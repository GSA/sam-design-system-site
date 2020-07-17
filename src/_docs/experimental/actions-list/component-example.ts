import { Component } from '@angular/core';

@Component({
  selector: 'doc-sam-box',
  templateUrl: './component-example.html',
})
export class SamActionsListComponentExampleComponent {
  example1_model = [
    {
      label: 'Share',
      icon: 'fa-share-alt',
    },
    {
      label: 'Download',
      icon: 'fa-download',
    },
    {
      label: 'Save',
      icon: 'fa-cloud',
    },
    {
      label: 'Toggle',
      icon: 'fa-bars',
    },
  ];

  example2_model = [
    {
      label: 'Share',
      icon: 'fa-share-alt',
      disabled: true,
    },
    {
      label: 'Download',
      icon: 'fa-download',
      disabled: true,
    },
    {
      label: 'Save',
      icon: 'fa-cloud',
      disabled: true,
    },
    {
      label: 'Toggle',
      icon: 'fa-bars',
      disabled: true,
    },
  ];

  example3_model = [
    {
      label: 'Share',
      icon: 'fa-share-alt',
      showMore: true,
    },
    {
      label: 'Download',
      icon: 'fa-download',
    },
    {
      label: 'Save',
      icon: 'fa-cloud',
    },
    {
      label: 'Toggle',
      icon: 'fa-bars',
      showMore: true,
    },
  ];

  public actionHandler(action) {
    window.alert(JSON.stringify(action));
  }
}
