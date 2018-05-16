import { Component, forwardRef, Input,
    ViewEncapsulation, ChangeDetectorRef,
    ChangeDetectionStrategy, HostListener, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SamInputMaskComponent),
    multi: true
};

@Component({
    selector: 'sam-input-mask',
    template: `<input
        [disabled]='disabled'
        type='text'
        [attr.id]='id'
        [attr.placeholder]='placeholder'
        [(ngModel)]='inputVal'
        (ngModelChange)='onModelChange()'
        (focus)='onFocus()'
        (blur)='onBlur()' />`,
    providers: [ VALUE_ACCESSOR ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SamInputMaskComponent implements ControlValueAccessor, OnInit {
    @Input() template: string;
    @Input() placeholder: string;
    @Input() id: string;
    @Input() disableFocusBehavior: boolean = false;

    inputVal;
    previousVal;
    disabled;
    onChange: (val) => void = (val) => {};
    onTouched: () => void = () => {};

    constructor(protected cdr: ChangeDetectorRef) { }

    @HostListener('focus') onfocus() {
        this.onTouched();
    }

    onFocus() {
        if (!this.disableFocusBehavior) {
            this.inputVal = this.templateToNumber(this.inputVal);
        }
    }

    onBlur() {
        const newVal = this.numberToTemplate(this.inputVal);
        this.inputVal = newVal;
        if (newVal !== this.previousVal) {
            this.previousVal = this.inputVal;
            this.onChange(this.inputVal);
        }
    }

    onModelChange() {
        if (this.previousVal && this.inputVal === '') {
            this.onChange(this.inputVal);
        }
    }

    ngOnInit() {
        if (!this.template) {
            throw Error('No template provided');
        }
    }

    emitChanges(evt) {
        this.onChange(this.inputVal);
    }

    templateToNumber (template: string): string {
        if (!template) {
          return;
        } else {
          return template
            .split('')
            .filter(char => char.match(/([^_\)\(-\s])/g))
            .join('');
        }
      }

    private numberToTemplate (numberStr: string): string {
        if (!numberStr) {
            return;
        }

        numberStr = numberStr.replace(/\D/g, '');

        const digits = numberStr
            .split('')
            .filter(digit => digit.match(/([^_\)\(-\s])/g));

        const blanks = this.template
            ? this.template.split('')
            : [];

        return blanks.map(
                blank => {
                    if (blank === '_') {
                        const next = digits.shift();
                        return next ? next : blank;
                    } else {
                        return blank;
                    }
                }
            )
            .join('')
            .concat(digits.join(''));
    }

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    writeValue(val) {
        this.inputVal = val;
        this.cdr.detectChanges();
    }

    setDisabledState(state: boolean) {
        this.disabled = state ? true : null;
    }
}
