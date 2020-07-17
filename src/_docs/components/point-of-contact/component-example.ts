import { Component } from '@angular/core';

@Component({
  selector: 'doc-poc',
  templateUrl: './component-example.html',
})
export class SamPointOfContactComponentExampleComponent {
  pointOfContact = {
    fullName: 'John Doe',
    address: '1234 Waterway Rd',
    city: 'Norfolk',
    state: 'VA',
    zip: '12345',
    email: 'jdoe@test.gov',
    phone: '222-222-2222',
    website: 'www.testsite.gov',
  };
}
