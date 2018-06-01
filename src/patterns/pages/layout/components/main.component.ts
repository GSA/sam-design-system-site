import {
    Component,
    ContentChild,
    AfterContentInit,
    HostBinding,
    Input
} from '@angular/core';

@Component({
    selector: 'sam-main',
    template: '<ng-content></ng-content>'
})
export class SamMainComponent {
    @Input('id') id = "primary-content";
    @HostBinding('attr.id') attrId = this.id;
}