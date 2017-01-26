import {Component, Input, Output, ViewChild, EventEmitter, forwardRef} from '@angular/core';
import { LabelWrapper } from '../../wrappers/label-wrapper';
import { OptionsType } from '../../types';
import {FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor, Validators} from "@angular/forms";

const noop = () => {};
const MY_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SamSelectComponent),
  multi: true
};

/**
 * The <samSelect> component is a select/options group form control
 *
 * @Input model: string|number|symbol - Sets the bound value of the component
 * @Input options: [{Option}] - Sets the array of option values and text (see OptionsType)
 * @Input label: string - Sets the label text
 * @Input name: string - Sets the semantic description for the component
 * @Input hint: string - Sets the helpful text for the using the component
 * @Input errorMessage: string - Sets the general error message
 * @Input required: boolean - Sets the general error message
 * @Input disabled: disabled - Sets the general error message
 * @Input control: FormControl - Sets the general error message
 * @Output modelChange: any - Event emitted on modal value change
 */
@Component({
  selector: 'samSelect',
  templateUrl: 'select.template.html',
  providers: [MY_VALUE_ACCESSOR]
})
export class SamSelectComponent implements ControlValueAccessor {
  @Input() model: string|number|symbol;
  @Input() options: OptionsType;
  @Input() label: string;
  @Input() name: string;
  @Input() hint: string;
  @Input() errorMessage: string;
  @Input() required: boolean;
  @Input() disabled: boolean;
  @Input() control: FormControl;

  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(LabelWrapper)
  public wrapper: LabelWrapper;

  constructor() { }

  ngOnInit() {
    if (!this.name) {
      throw new Error("<samSelect> requires a [name] parameter for 508 compliance");
    }

    if (!this.control) {
      return;
    }

    let validators: any[] = [];

    if (this.required) {
      validators.push(Validators.required);
    }

    this.control.setValidators(validators);
  }

  onSelectChange(val) {
    if (this.onChange) {
      this.onChange(val);
    }
    this.model = val;
    this.modelChange.emit(val);
    //this.wrapper.formatErrors(this.control);
  }

  setDisabledState(disabled) {
    this.disabled = disabled;
  }

  writeValue(value) {
    this.model = value;
  }

  onBlur() {
    //this.wrapper.formatErrors(this.control);
    if (this.onTouched) {
      this.onTouched();
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  private onChange: (_: any) => void;
  private onTouched: () => void;
}
