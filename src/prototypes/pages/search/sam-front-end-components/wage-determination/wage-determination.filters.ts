import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchUtil} from './search.util';
// import {DictionaryService} from '/api-kit/dictionary/dictionary.service';
// import {WageDeterminationService} from '/api-kit/wage-determination/wage-determination.service';
import { SortArrayOfObjects } from './sort-array-object.pipe';
import { FormBuilder, FormGroup } from '@angular/forms';

// Angular 2 only
@Component({
  selector: 'wage-determination-filters',
  templateUrl: 'wage-determination.filters.template.html'
})
export class SamWDFilters implements OnInit {

  @Input() isGovUser: boolean;

  isStandard: string = '';

  wdTypeModel = '';
  wdTypeConfig = {
    options: [
      {value: 'sca', label: 'Service Contract Act (SCA)', name: 'radio-sca'},
      {value: 'dbra', label: 'Davis-Bacon Act (DBA)', name: 'radio-dba'},
      {value: 'cba', label: 'Collective Bargaining Agreement (CBA)', name: 'radio-cba'},
    ],
    name: 'wageDeterminationRad',
    label: '',
    errorMessage: '',
    hint: '',
    param: 'wdType',
  };

  // Select State Component
  wdStateModel = '';
  wdStateObject;
  selectStateConfig = {
    options: [],
    disabled: false,
    label: 'Select State',
    name: 'state',
    placeholder: 'Select...',
    param: 'state',
    keyValueConfig: {
      keyProperty: 'value',
      valueProperty: 'label'
    }
  };

  // Select County Component
  countyObject;
  wdCountyModel = '';
  selectCountyConfig: any = {
    options: [],
    disabled: false,
    label: 'Select County/Independent City',
    name: 'county',
    placeholder: 'Select...',
    param: 'county',
  };

  // Select Construct Type Component drop-down
  wdConstructObject;
  wdConstructModel = '';
  selectConstructConfig: any = {
    options: [
      {value: '', label: 'Default option', name: 'empty', disabled: true},
    ],
    disabled: false,
    label: 'Select Construction Type',
    name: 'constructionType',
    placeholder: 'Select...',
    param: 'construction_type',
    keyValueConfig: {
      keyProperty: 'value',
      valueProperty: 'label'
    }
  };

  wdPreviouslyPerformedModel = '';
  wdPreviouslyPerformedConfig = {
    options: [
      {value: 'prevPerfYesLocality', label: 'Yes, in the same locality', name: 'prevYesLocality'},
      {
        value: 'prevPerfYesDifferentLocality',
        label: 'Yes, but in a different locality',
        name: 'prevYesDifferentLocality'
      },
      {value: 'prevPerfNo', label: 'No, not performed before', name: 'prevNo'}
    ],
    name: 'previousPerformedRad',
    label: 'Were these services previously performed under an SCA-Covered contract?',
    errorMessage: '',
    hint: '',
    param: 'prevP',
  };

  // Select SCA Subject to CBA - Radio Buttons
  wdSubjectToCBAModel = '';
  wdSubjectToCBAConfig = {
    options: [
      {value: 'yesBasedCBA', label: 'Yes, and the current contract is based on a CBA', name: 'cbaYesBased'},
      {value: 'yesUnbasedCBA', label: 'Yes, but the current contract is not based on a CBA', name: 'cbaYesUnbased'},
      {value: 'noCBA', label: 'No', name: 'cbaNo'}
    ],
    name: 'cbaRad',
    label: 'Were the employees working subject to a CBA?',
    errorMessage: '',
    hint: '',
    param: 'cba',
  };


  // Select NonStandard Services - Radio Buttons
  wdNonStandardRadModel: any = [''];
  wdNonStandardRadConfig = {
    optionsWithEven: [
      {value: 'yesNSS', label: 'Yes', name: '6'},
      {value: 'true', label: 'No, and the SCA WD ends in an even number', name: 'noEven'},
      {value: 'false', label: 'No, and the SCA WD ends in an odd number', name: 'noOdd'}
    ],

    optionsWithoutEven: [
      {value: 'yesNSS', label: 'Yes', name: '6'},
      {value: 'false', label: 'No, and the SCA WD ends in an odd number', name: 'noOdd'}
    ],

    name: 'radio-component4',
    label: 'Are the contract services to be performed listed in the drop-down below as a Non-Standard Service?',
    errorMessage: '',
    hint: '',
    param: 'is_wd_even',
  };

  // Select NonStandard Service, Service - drop down
  wdNonStandardSelectObject;
  wdNonStandardSelectModel = '';
  wdNonStandardSelectConfig = {
    options: [],
    disabled: false,
    label: 'If a service is chosen, "Yes" will automatically be selected',
    name: 'constructionType',
    placeholder: 'Select...',
    param: 'service',
    keyValueConfig: {
      keyProperty: 'value',
      valueProperty: 'label'
    }
  };

  queryParams: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              public router: Router,
              private fb: FormBuilder,
              private searchUtil: SearchUtil) {}

  // Angular 2 only
  ngOnInit() {
    // even response
    // this.activatedRoute.queryParams.subscribe(data => {
    //   this.queryParams = data;
    //   this.wdTypeModel = this.searchUtil.stringFromObject(this.wdTypeConfig['param'], data);
    //   this.wdStateModel = this.searchUtil.stringFromObject(this.selectStateConfig['param'], data);
    //   this.wdCountyModel = this.searchUtil.stringFromObject(this.selectCountyConfig['param'], data);
    //   this.wdConstructModel = this.searchUtil.stringFromObject(this.selectConstructConfig['param'], data);
    //   this.wdNonStandardSelectModel = this.searchUtil.stringFromObject(this.wdNonStandardSelectConfig['param'], data);
    //   this.wdNonStandardRadModel = this.searchUtil.stringFromObject(this.wdNonStandardRadConfig['param'], data);
    //   this.wdSubjectToCBAModel = this.searchUtil.stringFromObject(this.wdSubjectToCBAConfig['param'], data);
    //   this.wdPreviouslyPerformedModel = this.searchUtil.stringFromObject(this.wdPreviouslyPerformedConfig['param'], data);
    //   this.isStandard = this.searchUtil.stringFromObject('is_standard', data);

    //   const filteredDictionaries = this.dictionaryService.filterDictionariesToRetrieve('wdStates,dbraConstructionTypes,scaServices');
    //   this.getWageDeterminationDictionaryData(filteredDictionaries);
    //   this.determineEnableCountySelect();
    //   this.determineEnableServicesSelect();
    // });
  }

  setupQS() {
    const qsobj = {};

    // We will not need these once we move to Angular 5. Just a workaround for queryParamsHandling.
    qsobj['index'] = this.queryParams['index'];
    qsobj['keywords'] = this.queryParams['keywords'];
    qsobj['sort'] = this.queryParams['sort'];

    // wd or sca type param
    if (this.wdTypeModel.length > 0) {
      qsobj[this.wdTypeConfig['param']] = this.wdTypeModel;
    }

    // wd dba construction type param
    if (this.wdConstructModel.length > 0) {
      qsobj[this.selectConstructConfig['param']] = this.wdConstructModel;
    }

    // wd state param
    if (this.wdStateModel.length > 0) {
      qsobj[this.selectStateConfig['param']] = this.wdStateModel;
    }

    // wd county param
    if (this.wdCountyModel.length > 0) {
      qsobj[this.selectCountyConfig['param']] = this.wdCountyModel;
    }

    // wd Non Standard drop down param
    if (this.wdNonStandardSelectModel.length > 0) {
      qsobj['service'] = this.wdNonStandardSelectModel;
    }

    // wd Non Standard radio button param
    if (this.wdNonStandardRadModel.length > 0) {
      qsobj[this.wdNonStandardRadConfig['param']] = this.wdNonStandardRadModel;
      // this rad button determines isStandard as well
      qsobj['is_standard'] = this.isStandard;
    }

    // wd subject to cba param
    if (this.wdSubjectToCBAModel.length > 0) {
      qsobj[this.wdSubjectToCBAConfig['param']] = this.wdSubjectToCBAModel;
    }

    // wd previously performed param
    if (this.wdPreviouslyPerformedModel.length > 0) {
      qsobj[this.wdPreviouslyPerformedConfig['param']] = this.wdPreviouslyPerformedModel;
    }

    return qsobj;
  }

  getWageDeterminationDictionaryData(id) {
    // if (id === '') {
    //   this.filterWageDeterminationArray(this.dictionaryService.dictionaries);
    // } else {
    //   this.dictionaryService.getWageDeterminationDictionary(id).subscribe(
    //     data => {
    //       this.filterWageDeterminationArray(data);
    //     },
    //     error => {
    //       console.error('Error!!', error);
    //     }
    //   );
    // }
  }

  filterWageDeterminationArray(data) {

    // formatting the array data according to api type to match what UI elements expect
    // state data
    if (data['wdStates']) {
      const reformattedArray1 = data['wdStates'].map(function (stateItem) {
        const newObj = {label: '', value: ''};

        newObj.label = stateItem.value;
        newObj.value = stateItem.elementId;
        return newObj;
      });
      // adding the default selection row to the array
      this.selectStateConfig.options = new SortArrayOfObjects().transform(reformattedArray1, 'label');

      this.wdStateObject = reformattedArray1.filter((option) => {
        if (this.wdStateModel.toString() === option.value.toString()) {
          return option;
        }
      })[0];

      if (this.wdStateModel !== '') {
        this.getCountyByState(this.wdStateModel);
      } else {
        this.countyObject = {label: '', value: ''};
      }
    }

    // construction type data
    if (data['dbraConstructionTypes']) {
      const reformattedArray2 = data['dbraConstructionTypes'].map(function (constructionItem) {
        const newObj = {label: '', value: ''};

        newObj.label = constructionItem.value;
        newObj.value = constructionItem.value;
        return newObj;
      });

      this.selectConstructConfig.options = new SortArrayOfObjects().transform(reformattedArray2, 'label');

      this.wdConstructObject = reformattedArray2.filter((option) => {
        if (option.value.toString() === this.wdConstructModel.toString()) {
          return option;
        }
      })[0];
    }

    // scaServices type data
    if (data['scaServices']) {
      const reformattedArray3 = data['scaServices'].map(function (serviceItem) {
        const newObj = {label: '', value: ''};

        newObj.label = serviceItem.value;
        newObj.value = serviceItem.elementId;
        return newObj;
      });

      this.wdNonStandardSelectConfig.options = new SortArrayOfObjects().transform(reformattedArray3, 'label');

      this.wdNonStandardSelectObject = reformattedArray3.filter((option) => {
        if (parseInt(option.value, 10) === parseInt(this.wdNonStandardSelectModel, 10)) {
          return option;
        }
      })[0];
    }
  }

  wdFilterChange(event) {
    // set the models equal to empty if the opposite wd type is selected

    if (this.wdTypeModel === 'sca') {
      this.wdConstructModel = '';
      this.wdConstructObject = null;
    } else if (this.wdTypeModel === 'dbra') {
      this.wdNonStandardRadModel = '';
      this.wdNonStandardSelectModel = '';
      this.wdNonStandardSelectObject = null;
      this.wdPreviouslyPerformedModel = '';
      this.wdSubjectToCBAModel = '';
    } else {
      this.wdConstructModel = '';
      this.wdConstructObject = null;
      this.wdNonStandardRadModel = '';
      this.wdNonStandardSelectModel = '';
      this.wdNonStandardSelectObject = null;
      this.wdPreviouslyPerformedModel = '';
      this.wdSubjectToCBAModel = '';
      this.wdStateModel = '';
      this.wdCountyModel = '';
    }

    this.executeSearch();
  }

  // event for state change
  stateChange(event) {
    this.wdStateObject = event;
    this.wdStateModel = this.wdStateObject ? this.wdStateObject.value : '';
    // reset county model on state change
    this.wdCountyModel = '';
    // enable county select if needed
    this.determineEnableCountySelect();
    this.executeSearch();
  }

  countyChange(event) {
    this.countyObject = event;
    this.wdCountyModel = this.countyObject ? this.countyObject.value : '';
    this.executeSearch();
  }

  // determines if state is populated and if not disables county select
  determineEnableCountySelect() {
    if (this.wdStateModel !== '') {
      this.selectCountyConfig.disabled = false;
    } else {
      this.selectCountyConfig.disabled = true;
    }
  }

  getCountyByState(state) {
    // this.wageDeterminationService.getWageDeterminationFilterCountyData({
    //   state: state
    // }).subscribe(
    //   data => {
    //     // county data
    //     const defaultSelection = {value: '', label: 'Default option', name: 'empty', disabled: false};

    //     let reformattedArray = data._embedded.dictionaries[0].elements.map(function (countyItem) {
    //       const newObj = {label: '', value: ''};
    //       newObj.label = countyItem.value;
    //       newObj.value = countyItem.elementId;
    //       return newObj;
    //     });

    //     reformattedArray = new SortArrayOfObjects().transform(reformattedArray, 'label');

    //     this.selectCountyConfig.options = reformattedArray;

    //     this.countyObject = reformattedArray.filter((option) => {
    //       if (this.wdCountyModel.toString() === option.value.toString()) {
    //         return option;
    //       }
    //     })[0];
    //   },
    //   error => {
    //     console.error('Error!!', error);
    //   }
    // );
  }

  constructionTypeChange(event) {
    this.wdConstructObject = event;
    this.wdConstructModel = this.wdConstructObject ? this.wdConstructObject.value : '';
    this.executeSearch();
  }

  determineEnableServicesSelect() {
    if (this.wdNonStandardRadModel === 'yesNSS' || this.wdNonStandardRadModel === '') {
      this.wdNonStandardSelectConfig.disabled = false;
    } else {
      this.wdNonStandardSelectConfig.disabled = true;
    }
  }

  // previously performed selection
  wdPreviouslyPerformedChanged(event) {
      this.wdSubjectToCBAModel = '';
      this.wdSubjectToCBAChanged('');
  }

  // subject to change selection
  wdSubjectToCBAChanged(event) {
    this.wdNonStandardRadModel = '';
    this.wdNonStandardSelectModel = '';
    this.wdNonStandardSelectObject = null;
    // check if services should be disabled/enabled
    this.determineEnableServicesSelect();
  }

  // non standard services radio button selection
  wdNonStandardRadChanged(event) {
    // check if services should be disabled/enabled
    this.determineEnableServicesSelect();

    // if the non standard rad selection does not equal yes, services filter must be removed
    if (this.wdNonStandardRadModel !== 'yesNSS') {
      this.wdNonStandardSelectModel = '';
      this.wdNonStandardSelectObject = null;
    }

    // determine isStandard filter
    if (this.wdNonStandardRadModel === 'yesNSS') {
      this.isStandard = 'false';
    } else if (this.wdNonStandardRadModel === 'true' || this.wdNonStandardRadModel === 'false') {
      this.isStandard = 'true';
    }

    // show end of filters notification
    this.executeSearch();
  }

  // non standard services drop down selection
  wdNonStandardSelectChanged(event) {
    this.wdNonStandardSelectObject = event;
    this.wdNonStandardSelectModel = this.wdNonStandardSelectObject ? this.wdNonStandardSelectObject.value : '';
    // if drop down selection made, auto-select yes rad button
    if (this.wdNonStandardSelectModel !== '') {
      this.wdNonStandardRadModel = 'yesNSS';
    }
    this.wdNonStandardRadChanged(this.wdNonStandardRadModel);
  }

  private executeSearch() {
    const qsobj = this.setupQS();
    qsobj['page'] = 1;
    this.router.navigate(['/search'], {
      queryParams: qsobj
    });
  }
}
