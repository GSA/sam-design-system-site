# Draft SAM Web Design Standards

The [Draft SAM Web Design Standards](http://briangilmangsa.github.io/sam-web-design-standards/) extend the [Draft U.S. Web Design Standards](https://standards.usa.gov), which include a library of open source UI components and visual style guide for U.S. federal government websites.

In addition to defining standards for HTML structure and applied CSS styles, developers for the SAM environment have created user-interface kits (UI kits) available separately to make it even easier to get up and running with developing sites that follow these standards. Further, using the UI kits allows you to quickly develop functioning user interfaces that comply with these standards and allows all of us to make global changes to the SAM environment front-end with minimal development time.

## What do I get?

**From the SAM Web Design Standards:**

1. The U.S. Web Design Standards (see below).
1. [Font Awesome](http://fontawesome.io) for easy to use icons.
1. SAM custom components and HTML.
1. UI kits for easy HTML generation (separate downloads).

**From the U.S. Web Design Standards:**

The U.S. Web Design Standards include Sass, HTML structures, and JavaScript, including:

1. Stanardized HTML for UI components.
1. A package available through [npmjs.org](https://www.npmjs.com).
1. A set of flexible [Sass](http://sass-lang.com) files and variables.
1. [jQuery](http://jquery.com); a lightweight JavaScript library able to manipulate pages and make asynchronous server calls.
1. [Bourbon Neat](http://neat.bourbon.io) for creating a grid to allow adaptive page layouts.
1. [Bourbon](http://bourbon.io); a lightweight mixin library for Sass.

## Install using Node Package Manager

```$ npm install samwds```

## Usage

The assets will be installed to the ```node_modules``` directory of your project under ```samwds```.

**Sass:**

Add the following to the top of your root SCSS file:

`@import '/relative/path/to/node_modules/samwds/src/stylesheets/all';`

**JavaScript:**

Add the following to the top of your root JS file:

`require('/relative/path/to/node_modules/samwds/src/js/start.js');`

**Fonts and images:**

Copy the ```/node_modules/samwds/src/img``` and ```/node_modules/samwds/src/fonts``` directories to a public directory within your project.

Note: It is recommended that you automate this copying using something like ```npm gulp```. This way, when you run ```npm update``` any changes to the fonts and images can be easily incorporated.

## Project folder structure

The folder containing your compiled CSS and JavaScript should be at the same level within your project as the ```img``` and ```fonts``` directories.

Example:

```
public-root/
├── js/
│   └── compiled.js
├── css/
│   └── compiled.css
├── img/
└── fonts/
```

or

```
public-root/
└── assets/
    ├── js/
    │   └── compiled.js
    ├── css/
    │   └── compiled.css
    ├── img/
    └── fonts/
```

## Need installation help?

Do you have questions or need help with setup? Did you run into any weird errors while following these instructions? Feel free to open an issue here:

[https://github.com/GSA/sam-web-design-standards/issues](https://github.com/GSA/sam-web-design-standards/issues).

You can also email us directly at uswebdesignstandards@gsa.gov.

## Contributing to the code base

For complete instructions on how to contribute code, please read [CONTRIBUTING](CONTRIBUTING.md). These instructions also include guidance on how to set up your own copy of the Standards style guide website for development.

If you have questions or concerns about our contributing workflow, please contact us by [filing a GitHub issue](https://github.com/BrianGilmanGSA/sam-web-design-standards/issues) or ...emailing our team... .

## Reuse of open-source style guides

The Standards inherit from the [U.S. Web Design Standards](https://standards.usa.gov) distributed by 18f. Thereby, inheriting from the guides listed there.

## Licenses and attribution

### A few parts of this project are not in the public domain

The Standards inherit from the [U.S. Web Design Standards](https://standards.usa.gov) distributed by 18f. Thereby, inheriting the licenses and attributions of that project.

Some files in ```/dist/fonts``` and ```/dist``` Standards incorporate [Font Awesome](http://fontawesome.io/) by Dave Gandy under the [SIL Open Font License 1.1](http://scripts.sil.org/OFL).

### The rest of this project is in the public domain

The rest of this project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
