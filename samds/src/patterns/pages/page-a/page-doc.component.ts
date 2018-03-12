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

    <sam-sidenav 
      labelLookup="User Accounts" 
      [model]="sidenavModel">
    </sam-sidenav>
  </sam-sidebar>

  <sam-youtube id="5uciZ431AGo" data-emphasis="high"></sam-youtube>    
  
  <sam-container>
    <sam-box type="primary">
      <sam-heading importance="low" [text]="contentBoxTitle" icon="user">
      </sam-heading>
      <p [innerHTML]="contentBoxDescription"></p>
      <sam-button [buttonText]="contentBoxButton"></sam-button>
    </sam-box>
    
    <sam-box>
      <sam-list [items]="contentSecondaryBoxList"></sam-list>
    </sam-box>
    <p [innerHTML]="contentBelowBoxes"></p>
  </sam-container>
  
  <sam-container>
    <sam-heading importance="high" [text]="contentFirstParagraphTitle">
    </sam-heading>
    <p [innerHTML]="contentFirstParagraph"></p>
    
    <sam-list [items]="contentFirstParagraphList" data-emphasis="divided" bulleted>
    </sam-list>

    <sam-list [items]="contentFirstParagraphList2" bulleted>
    </sam-list>
  </sam-container>
  
  <sam-container>
    <sam-heading importance="high" [text]="contentSecondParagraphTitle">
    </sam-heading>
    <p [innerHTML]="contentSecondParagraph"></p>
    <p [innerHTML]="contentSecondParagraph2"></p>
  </sam-container>
  
  <sam-box type="outline">
    <sam-heading [text]="contentHorizontalMenuTitle" alignment="center" detached>
    </sam-heading>
    <sam-list [items]="contentHorizontalMenuItems" orientation="horizontal">
    </sam-list>
  </sam-box>
  
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
        label: "New to beta.SAM.gov",
        route: "#",
        children: [
          {
            label: "Features",
            route: "#"
          },
          {
            label: "User Accounts",
            route: "#"
          },
          {
            label: "About Us",
            route: "#"
          },
          {
            label: "What's Next",
            route: "#"
          }
        ]
      },
      {
        label: "Award Domains",
        route: "#"
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
  
  suptitle: 'Help Center',
  title: 'User Accounts',

  breadcrumbs: [
    { breadcrumb: 'Help Center', url: '/' },
    { breadcrumb: 'Customer Support'}
  ],

  sidebarLink: 'Help Home',
  sidebarBoxTitle: 'Learning Center',

  contentBoxTitle: 'Sign Up Now',
  contentBoxDescription: 'You can now create your user account in SAM',
  contentBoxButton: 'Sign Up',

  contentSecondaryBoxList: [
    {
      "icon": "video",
      "link": "#",
      "text": "Title of video that is small"
    },
    {
      "icon": "video",
      "link": "#",
      "text": "Title of video that is a little bit longer"
    }
  ],

  contentBelowBoxes: 'SAM Users can generally be grouped in to three types: \
  federal users, award recipients <em>(entity users)</em>, and public users.',

  contentFirstParagraphTitle: 'What You Can Do Without An Account',
  contentFirstParagraph: 'You can search for the following public information \
  without a user account.',
  contentFirstParagraphList: [
    {"text": "Federal assistance listings"},
    {"text": "Contract opportunities"},
    {"text": "Contract awards"},
    {"text": "Entity registrations"}
  ],
  contentFirstParagraphList2: [
    {"text": "Entity exclusions"},
    {"text": "Federal hierarchy"},
    {"text": "Wage determinations"}
  ],

  contentSecondParagraphTitle: 'Sign Up Now',
  contentSecondParagraph: "While you won't be able to access any additional \
  capabilities yet, you can prepare by creating your account now. When the \
  additional features become ready in the upcoming months, you'll be ready \
  to sign in.",
  contentSecondParagraph2: "<strong>Note:</strong> Even if you have an existing \
  account in one of the legacy systems <em>(e.g., SAM.gov, FBO.gov, CFDA.gov)</em>\
  you'll need to create a new account for beta.SAM.gov. In the future, after \
  all of the individual systems are retired, this account will be your only \
  account for all of our features",

  contentHorizontalMenuTitle: 'Learning Center: User Accounts',
  contentHorizontalMenuItems: [
    {
      "icon": "video",
      "link": "#",
      "text": "Video"
    },
    {
      "icon": "comment",
      "link": "#",
      "text": "FAQs"
    },
    {
      "icon": "newspaper",
      "link": "#",
      "text": "Articles"
    },
    {
      "icon": "book",
      "link": "#",
      "text": "Definitions"
    }
  ]
  
}`;

@Component({
  templateUrl: "page-doc.template.html"
})
export class PageADocComponent{
  code_template: string = code_example_template;
  code_component: string = code_example_component;
}