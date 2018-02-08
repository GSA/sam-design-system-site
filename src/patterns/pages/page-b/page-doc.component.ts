import { Component} from '@angular/core';

let code_example_template = `
<sam-page 
  [suptitle]="suptitle"
  [title]="title"
  [breadcrumbs]="breadcrumbs">

  <sam-sidebar>
    <a routerLink="">
      <sam-icon name="home"></sam-icon>
      {{ sidebarLink }}
    </a>
    
    <sam-box>
      <sam-heading [text]="sidebarBoxTitle" alignment="center">
      </sam-heading>
      <div class="sam-ui search">
        <input type="search" name="samsearch" placeholder="Search">
        <button>
          <sam-icon name="search"></sam-icon>
        </button>
      </div>
    </sam-box>
    
    <sam-sidenav labelLookup="Award Domains" [model]="sidenavModel">
    </sam-sidenav>
  </sam-sidebar>

  <sam-container>
    <p [innerHTML]="contentFirstParagraph"></p>
    <sam-list [items]="contentFirstParagraphList" bulleted>
    </sam-list>
  </sam-container>

  <sam-container pattern="zebra results">
    
    <sam-box>
      <sam-heading text="Assistance"></sam-heading>
      <sam-container pattern="media">
        <sam-icon></sam-icon>
        <sam-heading importance="low" text="Assistance Listings"></sam-heading>
        <p>
          Assistance listings provide a comprehensive description of all federal 
          assistance including information on eligibility, how to apply, and 
          matching requirements.
        </p>
      </sam-container>
    </sam-box>
    
    <sam-box>
      <sam-heading text="Acquisition"></sam-heading>
      <sam-container pattern="media">
        <sam-icon></sam-icon>
        <sam-heading importance="low" text="Contract Opportunities"></sam-heading>
        <p>
          Assistance listings provide a comprehensive description of all federal 
          assistance including information on eligibility, how to apply, and 
          matching requirements.
        </p>
      </sam-container>
    </sam-box>
    
    <sam-box>
      <sam-heading text="Acquisition"></sam-heading>
      <sam-container pattern="media">
        <sam-icon></sam-icon>
        <sam-heading importance="low" text="Contract Data"></sam-heading>
        <p>
          Contract actions that have an estimated value of $3,000 or more. Contract
          actions include definitive contracts, indefinite delivery vehicles (IDVs),
          delivery orders, purchase orders, contract modifications and other types 
          of contract actions.
        </p>
      </sam-container>
    </sam-box>
    
  </sam-container>

</sam-page>`;

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
        label: "New to beta.SAM.gov?",
        route: "#"
      },
      {
        label: "Award Domains",
        route: "#",
        children: [
          {
            label: "Assistance Listings",
            route: "#"
          },
          {
            label: "Contract Opportunities",
            route: "#"
          }
        ]
      },
      {
        label: "External Resources",
        route: "#"
      },
      {
        label: "Customer Support",
        route: "#"
      }
    ]
  };
  
  breadcrumbs: [
    { breadcrumb: 'Help Center', url: '/' },
    { breadcrumb: 'Award Domains'}
  ],
  
}`;

@Component({
  templateUrl: "page-doc.template.html"
})
export class PageBDocComponent{
  code_template: string = code_example_template;
  code_component: string = code_example_component;
}