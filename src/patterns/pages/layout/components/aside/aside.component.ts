import {
  Component,
  HostBinding,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'sam-aside',
  template: '<ng-content></ng-content>'
})
export class SamAsideComponent {
  @HostBinding('class') public classes = 'sam-aside';
  @Input()
  public get opened () {
    return this._opened;
  }

  public set opened (v: boolean) {
    this.toggle(!!v);
  }

  @Output() public onOpen = new EventEmitter<void>();
  @Output() public onClose = new EventEmitter<void>();

  private _opened: boolean;

  public open (): void {
    return this.toggle(true);
  }

  public close (): void {
    return this.toggle(false);
  }

  public toggle (isOpen: boolean = !this.opened): void {
    if (isOpen === this._opened) {
      return;
    } else {
      this._opened = isOpen;

      if (this._opened === true) {
        this.onOpen.emit();
      } else {
        this.onClose.emit();
      }
    }
  }
}
