import { Injectable } from '@angular/core';

@Injectable()
export class PagesService {
  
  loremData = {

    suptitle: 'consectetur',
    title: 'Lorem Ipsum',

    breadcrumbs: [
      { breadcrumb: 'Consectetur adipiscing', url: '/' },
      { breadcrumb: 'Lorem ipsum dolor'}
    ],

    sidebarLink: 'Ullamcorper nulla',
    sidebarBoxTitle: 'Luctus Velit',

    contentBoxTitle: 'Scelerisque pretium',
    contentBoxDescription: 'Mauris aliquam placerat ipsum at eleifend. In dictum.',
    contentBoxButton: 'Placerat',

    contentSecondaryBoxList: [
      {
        "icon": "video",
        "link": "#",
        "text": "Orci varius natoque"
      },
      {
        "icon": "video",
        "link": "#",
        "text": "Vivamus ac est eget ipsum"
      }
    ],

    contentBelowBoxes: 'Sed vestibulum ex rhoncus, feugiat risus laoreet, imperdiet quam. Aliquam erat volutpat.',

    contentFirstParagraphTitle: 'Pharetra Vel Lacus Vitae',
    contentFirstParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis commodo bibendum.',

    contentSecondParagraphTitle: 'Pharetra Vel Lacus Vitae',
    contentSecondParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing \
    elit. Donec lobortis commodo bibendum. In mauris dui, pulvinar at feugiat \
    nec, malesuada eget nisl. Cras maximus vestibulum augue, id tincidunt tellus \
    iaculis in.',
    contentSecondParagraph2: 'Duis gravida, purus in hendrerit rutrum, neque \
    lacus fermentum eros, ac suscipit velit sem eget odio. Integer tincidunt \
    tempus porta. Suspendisse quis enim nisi. Ut finibus pellentesque dapibus.',

    contentHorizontalMenuTitle: 'Luctus Velit: Integer fermentum',
    contentHorizontalMenuItems: [
      {
        "icon": "video",
        "link": "#",
        "text": "Lorem"
      },
      {
        "icon": "video",
        "link": "#",
        "text": "Suspendisse"
      },
      {
        "icon": "video",
        "link": "#",
        "text": "Maecenas"
      },
      {
        "icon": "video",
        "link": "#",
        "text": "Vivamus"
      }
    ]
  }

  helpData = {

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
    federal users, award recipients (entity users), and public users.',

    contentFirstParagraphTitle: 'What You Can Do Without An Account',
    contentFirstParagraph: 'You can search for the following public information \
    without a user account.',

    contentSecondParagraphTitle: 'Sign Up Now',
    contentSecondParagraph: "While you won't be able to access any additional \
    capabilities yet, you can prepare by creating your account now. When the \
    additional features become ready in the upcoming months, you'll be ready \
    to sign in.",
    contentSecondParagraph2: "Note: Even if you have an existing account in one \
    of the legacy systems (e.g., SAM.gov, FBO.gov, CFDA.gov) you'll need to \
    create a new account for beta.SAM.gov. In the future, after all of the \
    individual systems are retired, this account will be your only account for \
    all of our features",

    contentHorizontalMenuTitle: 'Learning Center: User Accounts',
    contentHorizontalMenuItems: [
      {
        "icon": "video",
        "link": "#",
        "text": "Video"
      },
      {
        "icon": "video",
        "link": "#",
        "text": "FAQs"
      },
      {
        "icon": "video",
        "link": "#",
        "text": "Articles"
      },
      {
        "icon": "video",
        "link": "#",
        "text": "Definitions"
      }
    ]
  }

  PageA = {
    data: this.loremData,
    value: 'lorem'
  }

  updatePageData(page, value){
    if(page == 'PageA'){
      this.PageA.value = value;
      if(value == 'lorem'){
        this.PageA.data = this.loremData;
      }else if(value == 'help'){
        this.PageA.data = this.helpData;
      }
    }
  }
  
}