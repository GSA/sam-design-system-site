import {
  Component,
  OnInit,
  Input,
  Injectable
} from '@angular/core';
import { Observable } from 'rxjs';
import { BaseExampleComponent } from '../../baseexample.component';
import { Http, Response, Headers } from '@angular/http';
import { AlphabetSelectorService } from '../../../../sam-ui-elements/src/ui-kit/components/alphabet-selector/alphabet-selector.component';
import { DocumentationService } from '../../../app/services/documentation.service';

@Injectable()
export class TestService implements AlphabetSelectorService{

  drillDownLimitLength: number = 2; // the limit level of drill down
  pageCount:number = 4; // total number of items in per page

  getData(checkPrefix:boolean, prefix:string, offset:number):any{
    return Observable.of({ resultSizeByAlphabet:{A:10, B:10}, resultData:[{},{},{}]});
  }
}

//tabs/spacing matters for code example block
var code_example = `<sam-alphabet-selector 
[sortLabel]="'Select'" 
[alphabetSelectorService]="testservice" 
(resultUpdate)="updateResultList($event)" 
(paginationUpdate)="onPaginationUpdate($event)">
</sam-alphabet-selector>`;

@Component({
	selector: 'doc-alphabet-selector',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class AlphabetSelectorExampleComponent extends BaseExampleComponent implements OnInit {
	typedoc_target = "SamAlphabetSelectorComponent";
  typedoc_content = "";
	markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example; 
  constructor(_http: Http, service: DocumentationService, private testservice: TestService){
    super(_http, service);
  }
  
  updateResultList(evt){
    console.log(evt);
  }
  onPaginationUpdate(evt){
    console.log(evt);
  }
}