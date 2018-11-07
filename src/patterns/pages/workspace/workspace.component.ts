import {
    Component,
    ViewChild,
    OnInit,
    OnDestroy,
    ChangeDetectorRef,
    forwardRef
  } from '@angular/core';
  import { FormBuilder, FormGroup } from '@angular/forms';
  import { Observable, of } from 'rxjs';
  import 'rxjs/add/observable/merge';
  import { cloneDeep } from 'lodash';
  import { FormlyFieldConfig } from '@ngx-formly/core';
  
  import {
    SamSortDirective,
    SamModalComponent,
    SamPageNextService,
    DataStore,
    layoutStore,
    SamPageNextComponent
  } from '@gsa-sam/sam-ui-elements';
  import {
    faTable,
    faChartBar
  } from '@fortawesome/free-solid-svg-icons';
  
 
  
  @Component({
    selector: 'sam-workspace-demo-component',
    templateUrl: './workspace.template.html',
    providers: [
      {
        provide: DataStore,
        useValue: layoutStore
      },
      forwardRef(() => SamPageNextService)
    ]
  })
  export class SamWorkspaceDemoComponent implements OnInit, OnDestroy {
   
  
    public ngOnInit() {
    
    }
  
    ngOnDestroy() {
    
    }
  
    
  }
  