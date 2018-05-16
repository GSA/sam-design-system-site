import { Component, ViewEncapsulation, forwardRef, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'sam-date-demo',
    templateUrl: './date.template.html',

})
export class DatePageComponent {
    example1;
    example2 = '12-12-2017';
    example3;
    picker;
    resultPicker2;
    date;
}
