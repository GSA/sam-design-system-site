import { Component} from '@angular/core';

let code_example_template = `
<page 
  title="Lorem ipsum dolor sit amet"
  section="Consectetur adipiscing elit"
  [breadcrumbs]="breadcrumbs">

  <sidebar>
    <sam-sidenav type="step" [model]="sidenavModel"></sam-sidenav>
  </sidebar>

  <p>
    Quisque lacinia commodo neque et suscipit. Integer rutrum mauris ex, non 
    ornare leo interdum nec. Suspendisse vitae tortor aliquam, tincidunt metus 
    ut, cursus est. Maecenas luctus maximus se...
  </p>
</page>`;

let code_example_component = `
import { Component} from '@angular/core';

// Relative path: adjust to match your folder structure
import { MenuItem } from '../sam-ui-elements/src/ui-kit/components/sidenav';

@Component({
  template: 'your template html',
})
export class PageComponent{

  sidenavModel: MenuItem = {
    label: "SideNavigation",
    children: [
      {
        label: "Lorem ipsum dolor",
        route: "#"
      },
      {
        label: "Nullam at mauris",
        route: "#"
      }
    ]
  };
  
  breadcrumbs = [
    { breadcrumb: 'Consectetur adipiscing', url: '/' },
    { breadcrumb: 'Lorem ipsum dolor'}
  ];
  
}`;

@Component({
  templateUrl: "page-doc.template.html"
})
export class PageBDocComponent{
  code_template: string = code_example_template;
  code_component: string = code_example_component;
}