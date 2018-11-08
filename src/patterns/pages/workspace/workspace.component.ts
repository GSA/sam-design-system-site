import {
  Component,
  ViewChild,
  OnInit,
  forwardRef,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SampleOppData } from './data/datasource';
import { SamSortDirective } from '@gsa-sam/sam-ui-elements';
import 'rxjs/add/observable/merge';
import { SamModalComponent } from '@gsa-sam/sam-ui-elements';
import {
  SamPaginationNextComponent,
  DataStore,
  layoutStore,
  SamPageNextService
} from '@gsa-sam/sam-ui-elements';
import { NgModel, FormBuilder, FormGroup } from '@angular/forms';
import { WorkspaceService, filter } from './data/workspace.service';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  fields,
  model,
} from './data/formly';

import {
  faTable,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sam-workspace-demo-component',
  templateUrl: './workspace.template.html',
  providers: [
    WorkspaceService,
    {
      provide: DataStore,
      useValue: layoutStore
    },
    forwardRef(() => SamPageNextService)
  ]
})
export class SamWorkspaceDemoComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public model = model;
  public filters: Observable<any>;
  public fields: FormlyFieldConfig[] = fields;
  public faChartBar = faChartBar;
  public fieldsEditor: SamModalComponent;
  public length: number;
  public optionsBackup: any;
  public dataSource: any[];
  displayedColumns = [];
  filter :filter;
  referenceColumns = [];

  constructor(private _fb: FormBuilder,
    private wsService: WorkspaceService,
    private _service: SamPageNextService) {
    this.form = this._fb.group({
      fhInputText: [''],
      dateModel: []
    });
  }

  public ngOnInit() {
    this._connectToPageService();
    this.dataSource = this.getData();
    this.getData();
  }
  private _connectToPageService() {
    this._service.model.properties.data.valueChanges
      .subscribe(
        data => {
          this.length = data.length;
        }
      );
  }
  ngOnDestroy() {

  }
 
 


  getData(): any {
    let results;
    this.wsService.getData(this.filter).subscribe(
      (res) => {
        results = res;
       
       
        }, 
        (error) => {
          return error;
        } );
        return results;
  }

}
