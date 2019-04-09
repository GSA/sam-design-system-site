import { Component, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  templateUrl: 'header-footer-components.template.html'
})
export class HeaderFooterAngualarComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.header.select(this.modelHeader.navigationLinks[0].id);
  }


  @ViewChild('header') header;
  modelHeader = {
    secondaryLinks: [{ imageSourcePath: "assets/icon/header-footer/Messages.png", imageAltText: "Messages Icon", text: "Messages", route: "/", id: "messages" },
    { imageSourcePath: "assets/icon/header-footer/Requests.png", imageAltText: "Requests Icon", text: "Requests", route: "/", id: "request" },
    { imageSourcePath: "assets/icon/header-footer/Workspace.png", imageAltText: "Workspace Icon", text: "Workspace", route: "/", id: "workspace" },
    { imageSourcePath: "assets/icon/header-footer/SignOut.png", imageAltText: "Sign Out Icon", text: "Sign Out", route: "/", id: "signOut" }],
    navigationLinks: [
      { text: "Search", route: "/patterns/page/angualr-header-footer-component", id: "search" },
      { text: "Databank", route: "/", id: "databank" },
      { text: "Data Services", route: "/", id: "dataService" },
      { text: "Help", route: "/", id: "help" },
      {
        text: "Link 3", id: "link3", children: [
          { text: "Link 3 sub 1", route: "/", id: "link3sub1" },
          { text: "Link 3 sub 2", route: "/", id: "link3sub2" },
          { text: "Link 3 sub 3", route: "/", id: "link3sub3" },
          { text: "Link 3 sub 4", route: "/", id: "link3sub4" }
        ]
      },
      {
        text: "Link 4", id: "link4", children: [
          { text: "Link 4 sub 1", route: "/", id: "link4sub1" },
          { text: "Link 4 sub 2", route: "/", id: "link4sub2" },
          { text: "Link 4 sub 3", route: "/", id: "link4sub3" },
          { text: "Link 4 sub 4", route: "/", id: "link4sub4" }
        ]
      }
    ],
    home: {
      text: "Home",
      route: "/",
      imageSourcePath: "/assets/img/sam-r9-logo-color.png",
      imageAltText: "Beta Sam Logo",
      id: "home"
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
