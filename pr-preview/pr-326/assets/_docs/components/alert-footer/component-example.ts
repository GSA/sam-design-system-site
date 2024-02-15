
import {
  Component
} from '@angular/core';
import {
  SamAlertFooterService
} from '@gsa-sam/sam-ui-elements';

@Component({
  selector: 'doc-sam-alert-footer',
  templateUrl: './component-example.html'
})
export class SamAlertFooterComponentExampleComponent {
  checkboxOptions = [{
    name: 'Enabled',
    label: 'Enabled',
    value: true
  }];
  checkboxVal = false;
  footerAlertModel = {
    title: 'test title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    type: 'error',
    timer: 0,
    mustDismiss: false
  };
  footerAlertTypes = [{
    label: 'success',
    name: 'success',
    value: 'success',
  }, {
    label: 'warning',
    name: 'warning',
    value: 'warning',
  }, {
    label: 'error',
    name: 'error',
    value: 'error',
  }, {
    label: 'info',
    name: 'info',
    value: 'info',
  }];

  constructor(private alertFooterService: SamAlertFooterService) { }

  mustDimissHandler(item) {
    if (item && item.length > 0) {
      this.footerAlertModel.mustDismiss = true;
    } else {
      this.footerAlertModel.mustDismiss = false;
    }
  }

  onFooterAlertBtnClick() {
    this.alertFooterService.registerFooterAlert(
      JSON.parse(JSON.stringify(this.footerAlertModel))
    );
  }
}
