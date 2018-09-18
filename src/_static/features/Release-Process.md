# Release Process
The Sam Design System follows the semantic versioning strategy for publishing updates, https://semver.org/. When new versions are ready for release, they will be published to npmjs.org with a corresponding release on github.com which will also contain release notes reflecting changes.

We also maintain an experimental package as part of our library for introducing new design and component ideas. These components may not always make it to production release, and the ones that do may be heavily modified before final release. Beware: we make no commitment to stability or maintenance for experimental components, so use them at your own risk. 

We always welcome feedback, and we encourage you to experiment and play with our experimental components and provide feedback via issues on Github.

When we feel components are stable enough for an external release, we will remove them from the experimental module into the appropriate directory and mark them as release candidates. After they pass our internal QA process, we will publish them in the next minor or major release.