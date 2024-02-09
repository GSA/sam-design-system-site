import {
  Component
} from '@angular/core';

@Component({
  selector: 'doc-phone-entry',
  templateUrl: './component-example.html'
})
export class PhoneEntryExampleComponent {
  phoneModel = '123-456-3366';
  phoneModel2 = '1+(123)456-3366';

  public phoneModelChange(phoneNum) {
    this.phoneModel = phoneNum;
  }

  public phoneModel2Change(phoneNum) {
    this.phoneModel2 = phoneNum;
  }
}
