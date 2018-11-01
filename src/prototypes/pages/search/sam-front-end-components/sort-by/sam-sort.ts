// Disabling lint as this is 3rd party code for demo only
/* tslint:disable */
import { Component, Input, forwardRef  } from '@angular/core';
// import {NumberFormatter} from "@angular/common/src/pipes/intl";
import { ControlValueAccessor,NG_VALUE_ACCESSOR } from '@angular/forms';
import { OptionsType } from '@gsa-sam/sam-ui-elements';
/**
* SamSortComponent - Lists results message component
*/
@Component({
	selector: 'sam-sort',
  template: `
  <div>
  <sam-select
    label="Sort By "
    [ngModel]="selection"
    [disabled]="disabled"
    (ngModelChange)="selectionHandler($event)"
    name="sort-select"
    [options]="options">
  </sam-select>

  <a role="button" 
    title="sort"
    [attr.tabindex]="tabindex"  
    class="sam-ui basic blue small button" 
    (click)="toggleSort()" 
    (keyup.enter)="toggleSort()">
      <i
        *ngIf="sort=='asc'"
        class="fa fa-sort-amount-asc"
        aria-hidden="true">
      </i>
      <i
        *ngIf="sort=='desc'"
        class="fa fa-sort-amount-desc"
        aria-hidden="true">
      </i>
      <span class="sr-only">Sort {{ sort=='asc'?'ascending':'descending'}}</span>
  </a>
</div>

  `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SamSortComponent),
        multi: true
    }]
})
export class SamSortComponent implements ControlValueAccessor{
  @Input() options:OptionsType[] = [{
      label:"",
      name: "Sort By",
      value: ""
  }];
  @Input() tabindex: number = 0;
  sort = "asc";
  selection = "";
  disabled = false;
  selectionHandler(evt){
    this.selection = evt;
    this.onTouched();
    this.onChange({type:this.selection,sort:this.sort});
  }

  toggleSort() {
    this.onTouched();
    this.sort = this.sort != 'asc' ? 'asc' : 'desc';
    this.onChange({type: this.selection, sort: this.sort});
  }

  onChange = (c)=>{};
  onTouched = ()=>{};

  setDisabledState(disabled) {
    this.disabled = disabled;
  }

  writeValue(value:{type:string,sort:string}={type:"",sort:"asc"}) {
    if(value && value.type){
      this.selection = value.type;
    }
    if(value && value.sort){
      this.sort = value.sort;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
