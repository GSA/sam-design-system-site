import { Component, HostListener} from '@angular/core';

@Component({
  templateUrl: 'template.html'
})
export class PickerComponent {

  @HostListener('click', ['$event']) onClick($event) {
    let target = $event.target.className;
    this.showOverlay = target === "prototype-picker-overlay" ? false : true;
   }

  showOverlay: boolean = true;
  
  openModal(){
    this.showOverlay = true;
  }

}


@Component({
  templateUrl: 'template-2.html'
})
export class PickerLevel2Component {}

@Component({
  templateUrl: 'template-3.html'
})
export class PickerLevel3Component {}

@Component({
  templateUrl: 'template-4.html'
})
export class PickerLevel4Component {}

@Component({
  templateUrl: 'template-5.html'
})
export class PickerLevel5Component {}

@Component({
  templateUrl: 'template-6.html'
})
export class PickerLevel6Component {}