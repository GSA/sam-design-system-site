<ul>
  <li><a href="#welcome">Welcome</a></li>
  <li>
    <a href="#guidelines">Guidelines</a>
    <ul>
      <li><a href="#submitting-issues">Submitting issues and recommendations</a></li>
      <li><a href="#submitting-prs">Submitting pull requests</a></li>
      <li><a href="#building-gulp">Building the site locally with gulp</a></li>
      <li><a href="#what-to-change">What do I change?</a></li>
    </ul>
  </li>
  <li><a href="#prioritization">Prioritization</a></li>
  <li>
    <a href="#licenses">Licenses and attribution</a>
    <ul>
      <li><a href="#not-public-domain">A few parts of this project are not in the public domain</a></li>
      <li><a href="#public-domain">The rest of this project is in the public domain</a></li>
    </ul>
  </li>
</ul>

<h1 id="welcome">Welcome!</h1>

We're so glad you're thinking about contributing! If you're unsure about anything, just ask — or submit the issue or pull request anyway. The worst that can happen is you'll be politely asked to change something. We appreciate all friendly contributions.

We want to ensure a welcoming environment for all of our projects. Our staff follows the [18F Code of Conduct](https://github.com/18F/code-of-conduct/blob/master/code-of-conduct.md) and all contributors should do the same.

We encourage you to read this project's CONTRIBUTING policy (you are here), its [LICENSE](LICENSE.md), and its [README](README.md).

If you have any questions or want to read more, check out the [18F Open Source Policy GitHub repository]( https://github.com/18f/open-source-policy), or just [shoot us an email](#).

<h2 id="guidelines">Guidelines</h2>

1. Pull requests should contain small changes to the codebase to minimize merge conflicts and large integrations.
1. Discovered merge conflicts within a pull request should be corrected by the submitter of the pull request.
1. No code freezes will be instituted; if a pull request cannot be merged or the functionality cannot be demonstrated at the Sprint review, the work will rollover to the next release (or Sprint).
1. Pull requests are reviewed and approved using the [GitHub review process](https://help.github.com/articles/about-pull-request-reviews/). Note: Reviewers should only use the "comment" or "request changes" options.

Gitflow Workflow branch names:

`gh-pages-staging` is equivalent to `develop`.
`gh-pages` is equivalent to `master`. 

<h3 id="submitting-issues">Submitting an issue or recommendation</h3>

While it is not necessary to use this format, it would be helpful if, when submitting an issue, it contained the following:

**What happened**

*Include a high-level description of the feature or error here including steps of how to recreate it if applicable. Include any benefits, challenges, or considerations. This can be short and sweet.*

**What I expected**

*Describe the desired behavior and what would deem this issue, bug, or feature complete.*

**Additional Info**

*Include any images, steps to recreate, notes, emojis, or whatever.*

<h3 id="submitting-prs">Submitting a pull request</h3>

Here are a few guidelines to follow when submitting a pull request:

1. Create a GitHub account or sign in to your existing account.
1. Fork this repo into your GitHub account. Read more about forking a repo here on GitHub:
[https://help.github.com/articles/fork-a-repo/](https://help.github.com/articles/fork-a-repo/)
1. Create a branch that lightly defines what you're working on (e.g. add-styles).
1. Ensure that your contribution works via `npm`, if applicable. See _Building the project locally with gulp_.
1. Once you're ready to submit a pull request, push your branch up to the repo.
1. Submit your pull request against the `gh-pages-staging` branch.

Have questions or need help with setup? Open an issue here [https://github.com/gsa/sam-design-standards/issues](https://github.com/joshbruce/sam-design-standards/issues).

<h3 id="building-gulp">Building the site locally with gulp</h3>

You've cloned the repository. Now, we just have to make sure your environment can do what it needs to in order to serve the site locally. 

Start by opening Terminal (OS X) or Command Prompt (Windows).

#### Confirm Ruby

To serve the site locally, we will need Ruby. Confirm Ruby is installed:

`$ gem -v`

If you do not see a version number, [install RubyGems](https://rubygems.org/pages/download).

#### Confirm Ruby Bundler

`$ bundle -v`

If you do not see a version number, and you have confirmed Ruby:

`$ gem install bundler`

#### Confirm NPM

To install the required modules, we will need Node Package Manager (NPM). Confirm NPM is available:

`$ npm -v`

If you do not see a version number, [install Node.js](https://nodejs.org/en/download/).

#### Confirm Gulp 

To compile the site, we will need Gulp - an NPM module. Confirm Gulp is available:

`$ gulp -v`

If you do not see a version number, and you have confirmed NPM:

`$ npm install --global gulp-cli`

#### Serve the site locally

If you've made it here, you are ready to go. Launch Terminal (OS X) or Command Prompt (Windows) and move to the locally cloned repository.

`$ cd ~/path/to/cloned/repo/sam-web-design-standards`

**Update gems (this could take a moment):**

First time: `$ bundle install`

To update to latest versions: `$ bundle update`

**Update node modules (this could take a moment, especially the first time):**

`$ npm update`

**Serve the site:**

`$ gulp website:serve`

After running this command, you should be able to view
the Standards website locally (http://127.0.0.1:4000).

This also sets up gulp and Jekyll to watch for file changes; so, as you update files, you should only need to refresh your browser.

Note: For a list of available gulp commands use:

`$ gulp`

#### Trouble shooting(For Mac)

If you have a problem serving the site locally, please try the following:

Launch Terminal (MacOS) and [install RVM](https://rvm.io/rvm/install)

Find a stable version of ruby and install it:

`$ rvm install ruby-[version-number]`

Use a stable version of ruby for rvm:

`$ rvm use [version-number]`

Install the ruby bundler:

`$ gem install bundler`

Redo the steps in **Serve the site locally** section


<h3 id="what-to-change">What do I change?</h3>

Anything. It will be up to the core team for the SAM Web Design Standards to determine whether to integrate the changes. 

Having said that:

1. The `/src` directory contains the Sass, JavaScript, image files, and fonts for the SAM environment and is the main entry point for displaying the Standards locally. Therefore, any changes to these files should be done in the spirit of recommendations to be applied to the SAM environment as a whole.
1. The `/_docs` contains all the pages for the Standards and is what you will edit to describe and demonstrate proposed change(s).
1. If you're feeling adventurous - all other files help to display the Standards, but do not affect the content of the Standards or the package for others.

**Have fun!**

Don't worry about breaking anything in the approved version. Until it is committed, merged, and released you can do whatever you want! Try different styles, HTML structures, and so on. 

Go. Play!

<h2 id="prioritization">Prioritization of Issues</h2>

We would like to avoid accumulating technical debt; instead, we would like to build technical credit. Therefore, we have established an overarching prioritization strategy.

When you consider taking on an issue, consider the following, in turn:

1. Level 1 defect: We want to fix what is broken as soon as possible.
2. Level 2 defect: We want to improve the experience for users before creating new experiences or features.
3. Refactor and re-engineer: We want to improve the maintainability and increase reuse of the code.
4. New features: We add new features based on requests from users and the community, and preferably *after* all known Level 1 and 2 defects are solved, refactored and re-engineered.

Our goal is to only ship if there are no known Level 1 defects. The other three issue types are not fundamental to the functionality of the system or package.

<h2 id="licenses">Licenses and attribution</h2>

<h3 id="not-public-domain">A few parts of this project are not in the public domain</h3>

The Standards inherit from the [U.S. Web Design Standards](https://standards.usa.gov) distributed by 18f. Thereby, inheriting the licenses and attributions of that project.

Some files in ```/dist/fonts``` and ```/dist``` Standards incorporate [Font Awesome](http://fontawesome.io/) by Dave Gandy under the [SIL Open Font License 1.1](http://scripts.sil.org/OFL).

<h3 id="public-domain">The rest of this project is in the public domain</h3>

The rest of this project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
