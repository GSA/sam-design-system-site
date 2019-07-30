import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';

import {
  faCheck
} from '@fortawesome/free-solid-svg-icons';

import {
  SidenavService
} from '@gsa-sam/sam-ui-elements';


@Component({
  selector: 'sam-entity-display',
  templateUrl: 'entity-display.template.html',
  providers: [ SidenavService ]
})

export class SamEntityDisplayComponent {
  config = {
    label: 'stuff',
    children: [
      {
        label: 'Entity Registration',
        route: '/foo',
        children: [
          {
            label: 'Core Data',
            route: '/lorem',
            children: [
              {
                label: 'Business Information',
                route: '/sit'
              },
              {
                label: 'Taxpayer Information',
                route: '/amet'
              },
              {
                label: 'Entity Types',
                route: '/consectetur'
              },
              {
                label: 'Points of Contact',
                route: '/consectetur'
              },{
                label: 'Security Information',
                route: '/consectetur'
              }
            ]
          },
          {
            label: 'Assertions',
            route: '/ipsum',
            children: [
              {
                label: 'Grandchild 1',
                route: '/adipisicings'
              }
            ]
          },
          {
            label: 'Reps and Certs',
            route: '/dolor'
          }
        ]
      },
      {
        label: 'Integrity Information',
        route: '/bar',
        children: [
          {
            label: 'Child 1',
            route: '/elit'
          },
          {
            label: 'Child 2',
            route: '/cumque'
          },
          {
            label: 'Child 3',
            route: '/dignissimos'
          }
        ]
      }
    ]
  };
}
