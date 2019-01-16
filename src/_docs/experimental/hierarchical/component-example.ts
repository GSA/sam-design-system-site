
import { Component, OnInit } from "@angular/core";
import { HierarchicalDataService } from "../../services/hierarchical.service";
/* tslint:disable */
import { HierarchicalTreeSelectedItemModel, TreeMode } from "@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/hierarchical-tree-selectedItem.model";
import { SamHierarchicalConfiguration } from "@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/models/SamHierarchicalConfiguration";



@Component({
  selector: "doc-sam-hierarchical",
  templateUrl: "./component-example.html"
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
    this.settings.keyField = "id";
    this.settings.id = "autocomplete1";
    this.settings.labelText = "Autocomplete 1";
    this.settings.valueProperty = "name";
    this.settings.subValueProperty = "subtext";
    this.settings.placeHolderText = "Enter text";
    this.settings.modalTitle = "Advanced Lookup";
    this.settings.primaryKey = "id";
    this.settings.gridDisplayedColumn = [
      { headerText: "Id", fieldName: "id" },
      { headerText: "Name", fieldName: "name" },
      { headerText: "Sub Text", fieldName: "subtext" },
      { headerText: "Children", fieldName: "childCount" }
    ];
    this.settings.childCountField="childCount";

    this.settings2.keyField = "id";
    this.settings2.id = "autocomplete2";
    this.settings2.labelText = "Autocomplete 2";
    this.settings2.valueProperty = "name";
    this.settings2.subValueProperty = "subtext";
    this.settings2.placeHolderText = "Enter text";
    this.settings2.modalTitle = "Advanced Lookup";
    this.settings2.primaryKey = "id";
    this.settings2.gridDisplayedColumn = [
      { headerText: "Id", fieldName: "id" },
      { headerText: "Name", fieldName: "name" },
      { headerText: "Sub Text", fieldName: "subtext" },
      { headerText: "Children", fieldName: "childCount" }
    ];
    this.settings2.childCountField="childCount";

    this.settings3.keyField = "id";
    this.settings3.id = "autocomplete3";
    this.settings3.labelText = "Autocomplete 3";
    this.settings3.valueProperty = "name";
    this.settings3.subValueProperty = "subtext";
    this.settings3.placeHolderText = "Enter text";
    this.settings3.modalTitle = "Advanced Lookup";
    this.settings3.primaryKey = "id";
    this.settings3.gridDisplayedColumn = [
      { headerText: "Id", fieldName: "id" },
      { headerText: "Name", fieldName: "name" },
      { headerText: "Sub Text", fieldName: "subtext" },
      { headerText: "Children", fieldName: "childCount" }
    ];
    this.settings3.childCountField="childCount";

    this.settings4.keyField = "id";
    this.settings4.id = "autocomplete4";
    this.settings4.labelText = "Autocomplete 4";
    this.settings4.valueProperty = "name";
    this.settings4.subValueProperty = "subtext";
    this.settings4.placeHolderText = "Enter text";
    this.settings4.modalTitle = "Advanced Lookup";
    this.settings4.primaryKey = "id";
    this.settings4.gridDisplayedColumn = [
      { headerText: "Id", fieldName: "id" },
      { headerText: "Name", fieldName: "name" },
      { headerText: "Sub Text", fieldName: "subtext" },
      { headerText: "Children", fieldName: "childCount" }
    ];
    this.settings4.childCountField="childCount";

    this.model.treeMode = TreeMode.SINGLE;
    this.model2.treeMode = TreeMode.SINGLE;
    this.model3.treeMode = TreeMode.MULTIPLE;
    this.model4.treeMode = TreeMode.MULTIPLE;

    


  }
}
