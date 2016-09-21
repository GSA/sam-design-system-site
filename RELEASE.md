## Creating a release for the SAM Web Design Standards

Only someone with write access to the SAM Web Design Standards repository should be publishing a new release.

### Preparing `gh-pages-staging` for release

1. Clone the [GSA: SAM Web Design Standards](https://github.com/GSA/sam-web-design-standards) to your local computer.
2. Confirm the `gh-pages-staging` branch is up to date and contains the merges requested for the given release.
3. Correct any merge conflicts.
4. Run `$ npm update`.
5. Run `$ gulp website:serve`.
6. Verify site still builds and runs as expected.

### Publishing release to Node Package Manager

1. Run `$ npm version [patch, minor, or major]`.
2. Run `$ npm publish` to push latest version to Node Package Manager.
3. Go to [https://www.npmjs.com/package/samwds](https://www.npmjs.com/package/samwds) to confirm package was updated to latest version.

### Publishing GitHub.com release 

1. Run `$ gulp release` to generate the `/dist` folder with the `zip` file of the SAM Web Design Standards.
3. Submit pull request from `gh-pages-staging` to `gh-pages`.
4. Have pull request merged.
5. Go to [GSA: SAM Web Design Standards](https://github.com/GSA/sam-web-design-standards).
3. Click "Releases".
4. Click "Draft a new release".
5. Enter the newly minted version number in the "Tag version" field.
6. Select `gh-pages` from the "Target" dropdown.
7. Enter "SAMWDS [version number]" into "Release title" field.
8. Update the release description with a list of the changes and updates.
9. Upload the `zip` file from the `/dist` directory.
10. Click "Publish release".
