import { Component, HostListener} from '@angular/core';

@Component({
  templateUrl: 'template.html'
})
export class PickerComponent {
  showOverlay: boolean = true;

  @HostListener('click', ['$event']) onClick($event) {
    const target = $event.target.className;
    this.showOverlay = target === 'prototype-picker-overlay' ? false : true;
  }

  openModal() {
    this.showOverlay = true;
  }

}


@Component({
  templateUrl: 'template-2.html'
})
export class PickerLevel2Component extends PickerComponent {}

@Component({
  templateUrl: 'template-3.html'
})
export class PickerLevel3Component extends PickerComponent {}

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
