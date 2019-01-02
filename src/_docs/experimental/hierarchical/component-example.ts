
import { Component, OnInit } from '@angular/core';
import { HierarchicalDataService } from '../../services/hierarchical.service';
/* tslint:disable */
import { HierarchicalTreeSelectedItemModel, TreeMode } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/hierarchical-tree-selectedItem.model';
import { SamHierarchicalSettings } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/hierarchical/hierarchical.component';



@Component({
  selector: 'doc-sam-hierarchical',
  templateUrl: './component-example.html'
})
export class SamHierarchicalComponentExampleComponent implements OnInit {


  public settings = new SamHierarchicalSettings();
  public settings2 = new SamHierarchicalSettings();
  public settings3 = new SamHierarchicalSettings();
  public settings4 = new SamHierarchicalSettings();

  public model = new HierarchicalTreeSelectedItemModel();
  public model2 = new HierarchicalTreeSelectedItemModel();
  public model3 = new HierarchicalTreeSelectedItemModel();
  public model4 = new HierarchicalTreeSelectedItemModel();



  constructor(public service: HierarchicalDataService) {

  }


  ngOnInit() {
    this.settings.keyField = 'id';
    this.settings.id = 'autocomplete1';
    this.settings.labelText = 'Autocomplete 1';  
    this.settings.valueProperty = 'name';
    this.settings.subValueProperty = 'subtext';
    this.settings.placeHolderText = "Enter text";

    this.settings2.keyField = 'id';
    this.settings2.id = 'autocomplete2';
    this.settings2.labelText = 'Autocomplete 2';  
    this.settings2.valueProperty = 'name';
    this.settings2.subValueProperty = 'subtext';
    this.settings2.placeHolderText = "Enter text";
    
    this.settings3.keyField = 'id';
    this.settings3.id = 'autocomplete3';
    this.settings3.labelText = 'Autocomplete 3';  
    this.settings3.valueProperty = 'name';
    this.settings3.subValueProperty = 'subtext';
    this.settings3.placeHolderText = "Enter text";

    this.settings4.keyField = 'id';
    this.settings4.id = 'autocomplete4';
    this.settings4.labelText = 'Autocomplete 4';  
    this.settings4.valueProperty = 'name';
    this.settings4.subValueProperty = 'subtext';
    this.settings4.placeHolderText = "Enter text";


    this.model.treeMode = TreeMode.SINGLE;
    this.model2.treeMode = TreeMode.SINGLE;
    this.model3.treeMode = TreeMode.MULTIPLE;
    this.model4.treeMode = TreeMode.MULTIPLE;
  }
}
