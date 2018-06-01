import {
    Component,
    ContentChild,
    AfterContentInit,
    HostBinding
} from '@angular/core';


@Component({
selector: 'sam-filters-wrapper',
template: '<ng-content></ng-content>'
})
export class SamFiltersWrapperComponent {
}
