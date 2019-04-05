import { Component } from '@angular/core';

@Component({
  templateUrl: 'header-footer-components.template.html'
})
export class HeaderFooterAngualarComponent {
  modelHeader = {
    secondaryLinks: [{ imageSourcePath: "assets/icon/header-footer/Messages.png", imageAltText: "Messages Icon", text: "Messages", route: "/" },
    { imageSourcePath: "assets/icon/header-footer/Requests.png", imageAltText: "Requests Icon", text: "Requests", route: "/" },
    { imageSourcePath: "assets/icon/header-footer/Workspace.png", imageAltText: "Workspace Icon", text: "Workspace", route: "/" },
    { imageSourcePath: "assets/icon/header-footer/SignOut.png", imageAltText: "Sign Out Icon", text: "Sign Out", route: "/" }],
    navigationLinks: [
      { text: "Search", route: "/" },
      { text: "Databank", route: "/" },
      { text: "Data Services", route: "/" },
      { text: "Help", route: "/" },
      {
        text: "Link 3", children: [
          { text: "Link 3 sub 1", route: "/" },
          { text: "Link 3 sub 2", route: "/" },
          { text: "Link 3 sub 3", route: "/" },
          { text: "Link 3 sub 4", route: "/" }
        ]
      },
      {
        text: "Link 4", children: [
          { text: "Link 4 sub 1", route: "/" },
          { text: "Link 4 sub 2", route: "/" },
          { text: "Link 4 sub 3", route: "/" },
          { text: "Link 4 sub 4", route: "/" }
        ]
      }
    ],
    home: {
      text: "Home",
      route: "/",
      imageSourcePath: "/assets/img/sam-r9-logo-color.png",
      imageAltText: "Beta Sam Logo"
    }
  };

  modelFooter = {
    footerLogo: {
      text: "General Services Administration",
      imageSourcePath: "assets/icon/header-footer/gsa.png",
      imageAltText: "GSA Logo"
    },
    linkSections: [
      {
        text: "About beta.SAM.gov", links: [
          { text: "Explore Our Community", route: "/" },
          { text: "Release Notes", route: "/" }
        ]
      },
      {
        text: "Our Partners", links: [
          { text: "Aquisition.gov", route: "/" },
          { text: "USASpending.gov", route: "/" },
          { text: "Grants.gov", route: "/" },
          { text: "More Partners", route: "/" },
        ]
      },
      {
        text: "Customer Service", links: [
          { text: "Learning Center", route: "/" },
          { text: "Contact Federal Service Desk", route: "/" },
          { text: "Resources", route: "/" },
          { text: "Freedom of Information Act", route: "/" },
        ]
      }
    ]
  };
}
