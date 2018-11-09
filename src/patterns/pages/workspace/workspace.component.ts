import {
  Component,
  OnInit,
  forwardRef,
  ChangeDetectorRef,
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SamSortDirective } from '@gsa-sam/sam-ui-elements';
import 'rxjs/add/observable/merge';
import { SamModalComponent } from '@gsa-sam/sam-ui-elements';
import { SamPageNextService } from '@gsa-sam/sam-ui-elements';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    forwardRef(() => SamPageNextService)
  ]
})
export class SamWorkspaceDemoComponent implements OnInit {
  public form: FormGroup;
  public model = model;
  public filters: Observable<any>;
  public fields: FormlyFieldConfig[] = fields;
  public faChartBar = faChartBar;
  public fieldsEditor: SamModalComponent;
  public length: number;
  public optionsBackup: any;
  public dataSource: any[];
  public filter: filter = new filter();
  public curPage = 1;
  public error: any;
  public filterItems = [];

  constructor(private _fb: FormBuilder,
    private wsService: WorkspaceService,
    private cdr: ChangeDetectorRef,
    private _service: SamPageNextService) {
    this.form = this._fb.group({
      fhInputText: [''],
      dateModel: []
    });
  }

  public ngOnInit() {
    this.getData(this.filter);

    this.filters = this._service.get('filters').valueChanges
      .map(model => this._filtersToPills(model));

    this.filters.subscribe(data => {
      this.curPage = 1;
      if (data.length !== 0) {
        this._service.get('data').setValue(this.dataSource.slice(0, 1));
      } else {
        this._service.get('data').setValue(this.dataSource);
      }
    });

    this._service.get('pagination').valueChanges.subscribe(model => {
      this.curPage = model.currentPage;
      this._service.get('data').setValue(this.dataSource);
    });
    this.cdr.detectChanges();
  }

  onTypeChange(name: string) {
    this.dataSource = [];
    this.filter.status = name;
    this.getData(this.filter);
  }
  getData(filter: filter): void {
    this.wsService.getData(filter).subscribe(
      (data) => {
        this.length = data.length;
        this.dataSource = data;
      },
      (error) => {
        this.error = error;
      });
  }
  private _filtersToPills(filters): any[] {
    const keys = Object.keys(filters);

    return keys.map(key => {
      let value;

      if (filters[key]) {
        if (filters[key].constructor === Array) {
          value = filters[key];
        } else {
          value = [filters[key]];
        }
      } else {
        value = [];
      }

      return {
        label: key,
        value: value
      };
    })
      .filter(filter => filter.value.length > 0);
  }
}
