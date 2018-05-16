import { Input, Component, ViewEncapsulation, ViewChild, OnInit,
    forwardRef, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, AbstractControl, ValidatorFn } from '@angular/forms';
import * as moment from 'moment/moment';

@Component({
    selector: 'sam-datepicker',
    template: `
<sam-label-wrapper #wrapper [label]='label' [hint]='hint' [name]='id'>
    <sam-input-mask
        [id]='id'
        [disabled]='disabled'
        [placeholder]="'mm-dd-yyyy'"
        [(ngModel)]='inputDateVal'
        (ngModelChange)='modelChangeHandler($event)'
        [disableFocusBehavior]='disableFocusBehavior'
        [template]='"__-__-____"' ></sam-input-mask>
</sam-label-wrapper>`,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SamDatePickerComponent),
        multi: true
    }]
})
export class SamDatePickerComponent implements ControlValueAccessor, OnInit {
    @Input() label: string;
    @Input() hint: string;
    @Input() id: string;
    @Input() control: AbstractControl;
    @Input() defaultValidations: boolean = true;
    @Input() disableFocusBehavior: boolean = true;
    @ViewChild('wrapper') wrapper;

    template = '__-__-____';
    inputDateVal;
    disabled;

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
        this.onChange(this.inputDateVal);
    }

    // these get overwritten by the register methods
    onChange: (val) => void = (val) => {};
    onTouched: () => void = () => {};

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    writeValue(val) {
        this.inputDateVal = val;
    }

    setDisabledState(state: boolean) {
        this.disabled = state ? true : null;
    }
}
