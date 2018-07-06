import { Component, ViewEncapsulation, forwardRef, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'sam-dollar-demo',
    templateUrl: './dollar.template.html',
})
export class DollarDemoComponent {
    dollarVal = "$12.12";
}
