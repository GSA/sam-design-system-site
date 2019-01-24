
import { Component, OnInit } from '@angular/core';
import { HierarchicalDataService } from '../../services/hierarchical.service';
/* tslint:disable */
import { HierarchicalTreeSelectedItemModel, TreeMode } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/hierarchical-tree-selectedItem.model';
import { SamHierarchicalConfiguration } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/models/SamHierarchicalConfiguration';



@Component({
  selector: 'doc-sam-hierarchical',
  templateUrl: './component-example.html'
})
export class SamHierarchicalComponentExampleComponent implements OnInit {


  public settings = new SamHierarchicalConfiguration();
  public settings2 = new SamHierarchicalConfiguration();
  public settings3 = new SamHierarchicalConfiguration();
  public settings4 = new SamHierarchicalConfiguration();

  public model = new HierarchicalTreeSelectedItemModel();
  public model2 = new HierarchicalTreeSelectedItemModel();
  public model3 = new HierarchicalTreeSelectedItemModel();
  public model4 = new HierarchicalTreeSelectedItemModel();



  constructor(public service: HierarchicalDataService) {

  }


  ngOnInit() {
    this.settings.id = 'autocomplete1'; // GOOD
    this.settings.primaryKeyField = 'id';// GOOD
    this.settings.primaryTextField = 'name'; // GOOD
    this.settings.secondaryTextField = 'subtext';// GOOD
    this.settings.labelText = 'Autocomplete 1';

    this.settings.autocompletePlaceHolderText = 'Enter text'; //Add more  description ex. autocomplete 
    this.settings.modalTitle = 'Advanced Lookup';// GOOD
    this.settings.gridColumnsDisplayed = [ // Switch verbage
      { headerText: 'Id', fieldName: 'id' },
      { headerText: 'Name', fieldName: 'name' },
      { headerText: 'Sub Text', fieldName: 'subtext' },
      { headerText: 'Children', fieldName: 'childCount' }
    ];
    this.settings.childCountField = 'childCount'; // GOOD
    this.settings.filterPlaceholderText = 'Filter Placeholder'; // GOOD
    this.settings.topLevelBreadcrumbText = 'All Departments'; // GOOD
   

    this.settings2.primaryKeyField = 'id';
    this.settings2.id = 'autocomplete2';
    this.settings2.labelText = 'Autocomplete 2';
    this.settings2.primaryTextField = 'name';
    this.settings2.secondaryTextField = 'subtext';
    this.settings2.autocompletePlaceHolderText = 'Enter text';
    this.settings2.modalTitle = 'Advanced Lookup';
    this.settings2.gridColumnsDisplayed = [
      { headerText: 'Id', fieldName: 'id' },
      { headerText: 'Name', fieldName: 'name' },
      { headerText: 'Sub Text', fieldName: 'subtext' },
      { headerText: 'Children', fieldName: 'childCount' }
    ];
    this.settings2.childCountField = 'childCount';
    this.settings2.filterPlaceholderText = 'Filter Placeholder';
    this.settings2.topLevelBreadcrumbText = 'All Departments';


    this.settings3.primaryKeyField = 'id';
    this.settings3.id = 'autocomplete3';
    this.settings3.labelText = 'Autocomplete 3';
    this.settings3.primaryTextField = 'name';
    this.settings3.secondaryTextField = 'subtext';
    this.settings3.autocompletePlaceHolderText = 'Enter text';
    this.settings3.modalTitle = 'Advanced Lookup';

    this.settings3.gridColumnsDisplayed = [
      { headerText: 'Id', fieldName: 'id' },
      { headerText: 'Name', fieldName: 'name' },
      { headerText: 'Sub Text', fieldName: 'subtext' },
      { headerText: 'Children', fieldName: 'childCount' }
    ];
    this.settings3.childCountField = 'childCount';
    this.settings3.filterPlaceholderText = 'Filter Placeholder';
    this.settings3.topLevelBreadcrumbText = 'All Departments';


    this.settings4.primaryKeyField = 'id';
    this.settings4.id = 'autocomplete4';
    this.settings4.labelText = 'Autocomplete 4';
    this.settings4.primaryTextField = 'name';
    this.settings4.secondaryTextField = 'subtext';
    this.settings4.autocompletePlaceHolderText = 'Enter text';
    this.settings4.modalTitle = 'Advanced Lookup';

    this.settings4.gridColumnsDisplayed = [
      { headerText: 'Id', fieldName: 'id' },
      { headerText: 'Name', fieldName: 'name' },
      { headerText: 'Sub Text', fieldName: 'subtext' },
      { headerText: 'Children', fieldName: 'childCount' }
    ];
    this.settings4.childCountField = 'childCount';
    this.settings4.filterPlaceholderText = 'Filter Placeholder';

    this.model.treeMode = TreeMode.SINGLE;
    this.model2.treeMode = TreeMode.SINGLE;
    this.model3.treeMode = TreeMode.MULTIPLE;
    this.model4.treeMode = TreeMode.MULTIPLE;




  }
}
