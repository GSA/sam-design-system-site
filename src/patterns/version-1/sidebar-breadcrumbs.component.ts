import { Component} from '@angular/core';

import { MenuItem } from 'sam-ui-elements/src/ui-kit/components/sidenav';

@Component({
  templateUrl: 'sidebar-breadcrumbs.template.html',
})
export class SidebarBreadcrumbsPageComponent {

  showSection = ['sidebar-breadcrumbs-code'];

  sidenavModel: MenuItem = {
    label: 'SideNavigation',
    children: [
      {
        label: 'Lorem ipsum dolor',
        route: '#'
      },
      {
        label: 'Nullam at mauris',
        route: '#'
      },
      {
        label: 'Maecenas feugiat',
        route: '#'
      },
      {
        label: 'Nunc non tellus',
        route: '#'
      },
      {
        label: 'Aenean in felis congue',
        route: '#'
      }
    ]
  };

  breadcrumbs = [
    { breadcrumb: 'Consectetur adipiscing', url: '/' },
    { breadcrumb: 'Lorem ipsum dolor'}
  ];

  toggleCode() {
    if (this.showSection != null) {
      this.showSection = null;
    } else {
      this.showSection = ['sidebar-breadcrumbs-code'];
    }
  }
}


const code_example_template = `
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

const code_example_component = `
import { Component} from '@angular/core';

// Relative path: adjust to match your folder structure
import { MenuItem } from 'sam-ui-elements/src/ui-kit/components/sidenav';

@Component({
  template: 'your template html',
})
export class SidebarBreadcrumbsPageComponent{

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
  template: `
  <div style="padding: 40px; border-top:2px dashed #ccc; background-color: #eaeaea;">
  <div class="container">
    <h3 class="sam-ui header">Page with side navigation and breadcrumbs</h3>
    <sam-tabs>
      <sam-tab tabTitle="Template" active="true">
        <sam-code-example language="html" [code]="code_template"></sam-code-example>
      </sam-tab>
      <sam-tab tabTitle="Component">
        <sam-code-example language="javascript" [code]="code_component"></sam-code-example>
      </sam-tab>
    </sam-tabs>

  </div>
  </div>
  `,
})
export class SidebarBreadcrumbsPageCodeComponent {
  code_template: string = code_example_template;
  code_component: string = code_example_component;
}
