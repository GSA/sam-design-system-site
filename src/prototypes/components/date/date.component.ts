import { Input, Component, ViewEncapsulation, ViewChild, OnInit,
    forwardRef, ChangeDetectionStrategy, HostListener, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, AbstractControl, ValidatorFn } from '@angular/forms';
import { SamFormControl } from 'sam-ui-elements/src/ui-kit/form-controls/sam-form-control';
import { SamFormService } from 'sam-ui-elements/src/ui-kit/form-service';
import * as moment from 'moment/moment';

@Component({
    selector: 'sam-datepicker-prototype',
    template: `
<sam-label-wrapper #wrapper [label]='label' [hint]='hint' [name]='name'>
    <sam-input-mask
        [name]='name'
        [disabled]='disabled'
        [placeholder]="'mm/dd/yyyy'"
        [(ngModel)]='value'
        (ngModelChange)='modelChangeHandler($event)'
        [disableFocusBehavior]='disableFocusBehavior'
        [template]='template' ></sam-input-mask>
</sam-label-wrapper>`,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SamDatePickerComponent),
        multi: true
    }]
})
export class SamDatePickerComponent extends SamFormControl implements OnInit {
    @Input() defaultValidations: boolean = true;
    @Input() disableFocusBehavior: boolean = true;
    @ViewChild('wrapper') wrapper;

    template = '__/__/____';

    static dateRequired() {
        return (c: AbstractControl) => {
            if (c.dirty && !c.value) {
                return {
                    dateRequiredError: {
                        message: 'This field is required'
                    }
                };
            }
            return undefined;
        };
    }

    static dateValidation() {
        const minYear = 1000;
        return (c: AbstractControl) => {
            const error = {
                dateError: {
                    message: ''
                }
            };
            if (c.dirty && (c.value && c.value !== undefined)) {
                const dateM = moment(c.value);
                if (!dateM.isValid()) {
                    error.dateError.message = 'Invalid date';
                    return error;
                } else {
                    if (dateM.get('year') < minYear) {
                        error.dateError.message = 'Please enter 4 digit year';
                        return error;
                    }
                }
            }
            return undefined;
        };
    }

    constructor(cdr: ChangeDetectorRef, service: SamFormService) {
        super(service, cdr);
    }

    @HostListener('focus') onfocus() {
        this.onTouched();
    }

    ngOnInit() {
        if (this.control && this.defaultValidations) {
            const validators: ValidatorFn[] = [];
            if (this.control.validator) {
                validators.push(this.control.validator);
            }
            // if (this.required) {
            //     //validators.push(SamDateComponent.dateRequired());
            // }
            validators.push(SamDatePickerComponent.dateValidation());
            this.control.setValidators(validators);
            this.control.statusChanges.subscribe(() => {
                this.wrapper.formatErrors(this.control);
            });
            this.wrapper.formatErrors(this.control);
        }
    }

    modelChangeHandler(evt) {
        this.onChange(this.value);
    }
}
