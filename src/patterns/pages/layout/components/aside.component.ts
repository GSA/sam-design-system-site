import {
    Component,
    ContentChild,
    AfterContentInit,
    HostBinding
} from '@angular/core';
import { SamFiltersWrapperComponent } from './filters-wrapper.component';


@Component({
    selector: 'sam-aside',
    template: '<ng-content></ng-content>'
})
export class SamAsideComponent {
    @HostBinding('class.sidebar') container: boolean = true;

    @ContentChild(SamFiltersWrapperComponent)
    public filtersWrapper: SamFiltersWrapperComponent;
}