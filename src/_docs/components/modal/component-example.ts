import {
  Component,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'doc-modal',
  templateUrl: './component-example.html'
})
export class SamModalComponentExampleComponent {
  @ViewChild('modal1', {static: true}) vcModal1;
  @ViewChild('modal2', {static: true}) vcModal2;
  @ViewChild('modal3', {static: true}) vcModal3;
  @ViewChild('modal4', {static: true}) vcModal4;
  @ViewChild('modal5', {static: true}) vcModal5;

  message = '';
  modalAlertTypes = [{
    label: 'success',
    name: 'success',
    value: 'success'
  }, {
    label: 'warning',
    name: 'warning',
    value: 'warning'
  }, {
    label: 'error',
    name: 'error',
    value: 'error'
  }, {
    label: 'info',
    name: 'info',
    value: 'info'
  },
  {
    label: 'plain',
    name: 'plain',
    value: 'plain'
  },
  {
    label: 'primary',
    name: 'primary',
    value: 'primary'
  }


];
  modalConfig = {
    title: 'Test Title',
    description: 'Description Text'
  };
  modalConfig2 = {
    type: 'success',
    title: 'Sample Title',
    description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'
  };

  onModalInitClick() {
    this.vcModal1.openModal();
  }
  onModalClose() {
    this.vcModal1.closeModal();
  }
  onModalInit2Click() {
    this.vcModal2.openModal();
  }
  onModal2Close() {
    this.vcModal2.closeModal();
  }
  onModalInit3Click() {
    this.vcModal3.openModal();
  }
  onModal3Close() {
    this.vcModal3.closeModal();
  }
  onModalInit4Click() {
    this.vcModal4.openModal();
  }
  onModal4Close() {
    this.vcModal4.closeModal();
  }
  onModal5InitClick() {
    this.vcModal5.openModal();
  }
  onModal5Close() {
    this.vcModal5.closeModal();
  }
}
