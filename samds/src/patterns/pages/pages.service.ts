import { Injectable } from '@angular/core';

@Injectable()
export class PagesService {
  
  loremDataPageA = {

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
        "icon": "none",
        "link": "#",
        "text": "Orci varius natoque"
      },
      {
        "icon": "none",
        "link": "#",
        "text": "Vivamus ac est eget ipsum"
      }
    ],

    contentBelowBoxes: 'Sed vestibulum ex rhoncus, feugiat risus laoreet, \
    imperdiet quam. Aliquam erat volutpat.',

    contentFirstParagraphTitle: 'Pharetra Vel Lacus Vitae',
    contentFirstParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing \
    elit. Donec lobortis commodo bibendum.',
    contentFirstParagraphList: [
      {"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
      {"text": "Etiam dignissim enim eget suscipit auctor"},
      {"text": "Donec eget elit ullamcorper est malesuada"},
      {"text": "Duis sit amet felis porta, dapibus lectus"}
    ],
    contentFirstParagraphList2: [
      {"text": "Mauris luctus urna at semper fermentum"},
      {"text": "Ut suscipit nisl sit amet tempus bibendum"},
      {"text": "Nam eget risus ornare, varius enim nec"}
    ],

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
        "icon": "none",
        "link": "#",
        "text": "Lorem"
      },
      {
        "icon": "none",
        "link": "#",
        "text": "Suspendisse"
      },
      {
        "icon": "none",
        "link": "#",
        "text": "Maecenas"
      },
      {
        "icon": "none",
        "link": "#",
        "text": "Vivamus"
      }
    ]
  }

  helpDataPageA = {

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
  }

  helpDataPageB = {

    suptitle: 'Help Center',
    title: 'Award Domains',

    breadcrumbs: [
      { breadcrumb: 'Help Center', url: '/' },
      { breadcrumb: 'Award Domains'}
    ],

    sidebarLink: 'Help Home',
    sidebarBoxTitle: 'Learning Center',

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

    contentFirstParagraph: 'The beta.SAM.gov domains contain data has been \
    migrated from out legacy systems. The domains support two distinct types \
    of federal awards: acquisitions and assistance.',
    contentFirstParagraphList: [
      {"text": "Acquisition awards are contracts awarded under the Federal \
      Acquisition Regulation (FAR)."},
      {"text": "Assistance awards are grant, cooperative, loan, insurance, \
      service, and other agreements covered by the Code of Federal Regulations, \
      specifically 2 CFR 200."}
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
  }

  PageA = {
    data: this.helpDataPageA,
    value: 'help'
  }

  PageB = {
    data: this.helpDataPageB,
    value: 'help'
  }

  updatePageData(page, value){
    if(page == 'PageA'){
      this.PageA.value = value;
      if(value == 'lorem'){
        this.PageA.data = this.loremDataPageA;
      }else if(value == 'help'){
        this.PageA.data = this.helpDataPageA;
      }
    }
  }
  
}