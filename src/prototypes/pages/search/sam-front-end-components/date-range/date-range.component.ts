// Disabling lint as this is 3rd party code for demo only
/* tslint:disable */
import {
  Component,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  AbstractControl,
  FormControl,
  ValidatorFn } from "@angular/forms"
import * as moment from 'moment/moment';


function dateRangeFilterValidation(c:AbstractControl){
    if(c.value && c.value['dateRange'] && c.value['dateRange']['startDate'] && c.value['dateRange']['endDate']){
    let startDateM = moment(c.value['dateRange']['startDate']);
    let endDateM = moment(c.value['dateRange']['endDate']);
    if(c.value['dateRange']['startDate'] != "Invalid date" &&
        c.value['dateRange']['endDate'] != "Invalid date" &&
        endDateM.diff(startDateM) < 0){
      return {
        dateRangeError: {
          message: "Invalid date range"
        }
      }
    }
  }
  return null;
}

@Component ({
    selector: 'sam-date-range-filter',
    templateUrl: './date-range.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SamDateRangeFilterComponent),
        multi: true
    }]
})
export class SamDateRangeFilterComponent implements ControlValueAccessor {
    /**
     * Sets the timezone options (in daterange when type is 'date-time')
     */
    @Input() timezoneOptions = [
        {name:'Select a timezone',label:'Select a timezone',value:''},
        {name:'EST',label:'EST',value:'est'},
        {name:'PST',label:'PST',value:'pst'}]
    /**
     * Sets the timeSpan options
     */
    @Input() timeSpanOptions = [
        {name:'Select a range',label:'Select a range',value:''},
        {name:'last 30 days',label:'last 30 days',value:'30'},
        {name:'last 90 days',label:'last 90 days',value:'90'},
        {name:'last 6 months',label:'last 6 months',value:'182'},
        {name:'last 1 year',label:'last 1 year',value:'365'}];
    /**
     * Sets the top radio options
     */
    @Input() dateRadioOptions = [
        {name:'Date',label:'Date',value:'date'},
        {name:'Date Range',label:'Date Range',value:'dateRange'}];
    /**
     * sets the initial selection to be on 'timeSpan', 'date', or 'dateRange'
     */
    @Input() radioSelection = "timeSpan";
    /**
     * Sets the range type to be 'date' or 'date-time'
     */
    @Input() rangeType = "date";
    /**
     * Sets the label text in the wrapper
     */
    @Input() label;
    /**
     * Sets the name attribute on the top radio buttons (should be unique if multiple instances of this component are on the same page)
     */
    @Input() radioName = "select-filter";
    /**
     * Passes in the Angular FormControl
     */
    @Input() control: FormControl;
    @ViewChild('wrapper') wrapper;
    model = {
        date:null,
        dateRange:null,
        timeSpan:"",
        timezone:""
    };
    disabled:boolean = false;

    ngOnInit(){
        if(this.control){
            let validators: ValidatorFn[] = [];
            if(this.control.validator){
                validators.push(this.control.validator);
            }
            validators.push(dateRangeFilterValidation);
            this.control.setValidators(validators);
            this.control.valueChanges.subscribe(()=>{
                this.wrapper.formatErrors(this.control);
            });
            this.wrapper.formatErrors(this.control);
        }
    }

    radioChange(change){
        let arr = [];
        this.radioSelection = change;//'date','dateRange','timeSpan'
        if(change == "dateRange" && this.rangeType=="date-time"){
            arr = ['dateRange','timezone'];
        } else {
            arr = [change];
        }
        this.emitChange(arr);
    }

    dateChange(change){
        this.model.date = change;
        this.emitChange(['date']);
    }

    dateRangeChange(change){
        this.model.dateRange = change;
        if(this.rangeType=="date-time"){
            this.emitChange(['dateRange','timezone']);
        } else {
            this.emitChange(['dateRange']);
        }
    }

    dateRangeTimezoneChange(change){
        this.model.timezone = change;
        if(this.rangeType=="date-time"){
            this.emitChange(['dateRange','timezone']);
        } else {
            this.emitChange(['dateRange']);
        }
    }

    timeSpanChange(change){
        this.model.timeSpan = change;
        this.emitChange(['timeSpan']);
    }

    emitChange(keys){
        let obj = {};
        for(let val of keys){
            obj[val] = this.model[val];
        }

        this.onChange(obj);
    }

    onChange: any = (_any) => { };
    onTouched: any = () => { };

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    setDisabledState(disabled) {
        this.disabled = disabled;
    }

    writeValue(value) {
      if(value){
        this.model = value;
      }else{
        this.model = {
            date:null,
            dateRange:null,
            timeSpan:"",
            timezone:""
        };
      }
    }
}
