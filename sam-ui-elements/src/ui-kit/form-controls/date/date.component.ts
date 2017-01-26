import {Component, Input, ViewChild, Output, EventEmitter, OnInit, OnChanges} from '@angular/core';
import * as moment from 'moment/moment';

/**
 * The <samDate> component is a Date entry portion of a form
 *
 * @Input errorMessage: string - Sets the general error message for component
 * @Input name: string - Sets the name attribute for component
 * @Input label: string - Sets the label text
 * @Input hint: string - Sets the helpful hint text
 * @Input disabled: boolean - Sets the disabled status of component, defaults to false
 * @Input value: string - Sets the current value of the form control
 * @Output valueChange: any - Event emitted when value changes
 * @Output blurEvent: any -  Event emitted when form control loses focus
 */
@Component({
  selector: 'samDate',
  templateUrl: 'date.template.html',
})
export class SamDateComponent implements OnInit, OnChanges {
  public INPUT_FORMAT: string = 'Y-M-D';
  public OUTPUT_FORMAT: string = 'YYYY-MM-DD';

  model: any = {
    month: null,
    day: null,
    year: null
  };
  @Input() errorMessage: string = "";
  @Input() name: string = "";
  @Input() label: string = "";
  @Input() hint: string = "";
  @Input() prefix: string = "";
  @Input() disabled: boolean = false;
  @Input() control;

  @Input() value: string;
  @Output() valueChange = new EventEmitter<any>();
  @Output() blurEvent = new EventEmitter<any>();

  @ViewChild('month') month;
  @ViewChild('day') day;
  @ViewChild('year') year;

  constructor() { }

  ngOnInit() {
    if (!this.name) {
      throw new Error('SamTimeComponent required a name for 508 compliance');
    }
  }

  ngOnChanges() {
    this.parseValueString();
  }

  parseValueString() {
    if (this.value) {
      // use the forgiving format (that doesn't need 0 padding) for inputs
      let m = moment(this.value, this.INPUT_FORMAT);
      if (m.isValid()) {
        this.model.month = m.month() + 1;
        this.model.day = m.date();
        this.model.year = m.year();
      }
    }
  }

  onBlur() {
     this.blurEvent.emit();
  }

  getDate() {
    return moment([this.model.year, this.model.month-1, this.model.day]);
  }

  onChange() {
    if (this.isClean()) {
      this.valueChange.emit(null);
    } else if (!this.getDate().isValid()) {
      this.valueChange.emit('Invalid Date');
    } else {
      // use the strict format for outputs
      let dateString = this.getDate().format(this.OUTPUT_FORMAT);
      this.valueChange.emit(dateString);
    }
  }

  isClean() {
    return (isNaN(this.model.day) || this.model.day===null) &&
      (isNaN(this.model.month) || this.model.month===null) &&
      (isNaN(this.model.year) || this.model.year===null);
  }

  isValid() {
    return this.getDate().isValid();
  }

  monthName() {
    return `${this.name}_month`;
  }

  dayName() {
    return `${this.name}_day`;
  }

  yearName() {
    return `${this.name}_year`;
  }

}
