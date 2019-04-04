import { Component } from '@angular/core';

@Component({
  templateUrl: 'header-footer-components.template.html'
})
export class HeaderFooterAngualarComponent {
  model = {
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
        text: "Link 3", route: "/", children: [
          { text: "Link 3 sub 1", route: "/" },
          { text: "Link 3 sub 2", route: "/" },
          { text: "Link 3 sub 3", route: "/" },
          { text: "Link 3 sub 4", route: "/" }
        ]
      },
      {
        text: "Link 4", route: "/", children: [
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
}




// export class HeaderModel {
//   secondaryLinks: HeaderSecondaryLink[];
//   navigationLinks: HeaderNavigationLink[];
// }


// export class HeaderNavigationLink {
//   text: string;
//   route: string;
//   children: HeaderNavigationLink[];
// }

// export class HeaderSecondaryLink {
//   text: string;
//   route: string;
//   imageSourcePath: string;
//   imageAltText: string;
// }
