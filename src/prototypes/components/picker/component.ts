import { Component, HostListener} from '@angular/core';
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: 'template.html'
})
export class PickerComponent {
  faSearch = faSearch;
  showOverlay: boolean = true;

  data: Object[] = [
    {
      'name': 'Action',
      'type': 'Department'
    },
    {
      'name': 'United States Information Agency',
      'type': 'Agency'
    },
    {
      'name': 'Department of Defense',
      'type': 'Department',
      'children' : [
        {
          'name': 'Departments',
          'found': 3
        },
        {
          'name': 'Agencies',
          'found': 20,
          'children' : [
            {
              'name': 'Defense Advanced Research Projects Agency'
            },
            {
              'name': 'Defense Commissary Agency'
            },
            {
              'name': 'Defense Contract Audit Agency'
            },
            {
              'name': 'Defense Contract Management Agency'
            },
            {
              'name': 'Defense Finance and Accounting Service'
            },
            {
              'name': 'Defense Health Agency'
            },
            {
              'name': 'Defense Information Systems Agency'
            },
            {
              'name': 'Defense Intelligence Agency'
            },
            {
              'name': 'Defense Legal Services Agency'
            },
            {
              'name': 'Defense Logistics Agency'
            },
            {
              'name': 'Defense POW/MIA Accounting Agency'
            },
            {
              'name': 'Defense Security Cooperation Agency'
            },
            {
              'name': 'Defense Security Service'
            },
            {
              'name': 'Defense Threat Reduction Agency'
            },
            {
              'name': 'Joint Improvised-Threat Defeat Agency'
            },
            {
              'name': 'Missile Defense Agency'
            },
            {
              'name': 'National Geospatial-Intelligence Agency'
            },
            {
              'name': 'National Reconnaissance Office'
            },
            {
              'name': 'National Security Agency/Central Security Service'
            },
            {
              'name': 'Pentagon Force Protection Agency'
            }
          ]
        },
        {
          'name': 'Field Activities',
          'found': 8
        }
      ]
    },
    {
      'name': 'Bureau of Radiological Health',
      'type': 'Department'
    },
    {
      'name': 'Office of Human Development Services',
      'type': 'Agency'
    },
    {
      'name': 'U.S. Postal Service',
      'type': 'Department'
    },
    {
      'name': 'Old West Regional Commission',
      'type': 'Department'
    },
    {
      'name': 'Health Care Financing Administration',
      'type': 'Agency'
    },
    {
      'name': 'Interstate Commerce Commission',
      'type': 'Department'
    },
    {
      'name': 'Smithsonian Institution',
      'type': 'Office'
    }
  ];

  results = this.data;
  parent = this.data;
  searchOption = 'all';
  level = 0;
  breadcrumbs = [
    {
      'name': 'Most Searched'
    }
  ];

  @HostListener('click', ['$event'])
  onClick($event) {
    const target = $event.target.className;
    this.showOverlay = target === 'prototype-picker-overlay' ? false : true;
  }

  openModal() {
    this.showOverlay = true;
  }

  getParent() {
    this.results = this.parent;
  }

  getChildren(result) {
    if (result.children) {

      this.parent = this.results;

      if (this.level > 0) {
        this.breadcrumbs.push({'name': result.name});
      } else {
        this.breadcrumbs = [{ 'name': result.name }];
      }

      this.results = result.children;

      this.searchOption = 'here';

      this.level += 1;
    } else {
      this.breadcrumbs.push({'name': result.name});
    }
  }

}


// @Component({
//   templateUrl: 'template-2.html'
// })
// export class PickerLevel2Component extends PickerComponent {}

// @Component({
//   templateUrl: 'template-3.html'
// })
// export class PickerLevel3Component extends PickerComponent {}

@Component({
  templateUrl: 'template-4.html'
})
export class PickerLevel4Component extends PickerComponent {}

@Component({
  templateUrl: 'template-5.html'
})
export class PickerLevel5Component extends PickerComponent {}

@Component({
  templateUrl: 'template-6.html'
})
export class PickerLevel6Component extends PickerComponent {}
