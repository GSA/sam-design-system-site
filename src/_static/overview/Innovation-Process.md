# Sam Design System Development and Release Process
## Sam-UI-Elements Release Process
The release and versioning of the overall library should be driven by innovation within the components themselves. To that end, most of the discussion is centered around the component development process. However, the versioning of the library and replacement of old components with new ones warrants specific discussion.

### Semantic Versioning
The library should follow semantic versioning. As new update are made, the version of the library should be incremented according the impact of the change. Breaking changes get a new major release (x.0.0), new features get a new minor release (0.x.0), and bug fixes or refactoring that doesn’t not affect overall interface and architecture of the system get patch release (0.0.x).

### Innovation and Breaking Components
When the team wants to take on innovation in an existing component, a process should be followed with some care. First, the new components should be developed in a separate, experimental package. For the time being, this is a separate module within sam-ui-elements, but it would be better in the long term to split this package off.

Second, naming is important. As only one component can exist with a given name at a time, the component should be postfixed with `-exp` on the selector and `Exp` on the class to be clear that the component is in an experimental state. 

At the time the component reaches the alpha stage, a warning should be added the older component that it will be deprecated at sometime in the future. This shows our confidence that our design hypothesis has been proven and is feasible, and only the technical implementation is left to finalize before releasing our innovation.

Once the component makes it through the component release process and is ready for final release, the library should issue a new major release and the component may drop the `-exp` postfixes at this time. The older component should then be removed.

Finally, support related to critical bugs and security vulnerabilities should be expected for deprecated components. We should also find a way to archive older documentation so that users can still find what they need if they do not follow our release cycle (and we should not expect them to).

### Hotfixes
From the perspective of sam.gov, hotfixes are code changes that shortcut the normal release process in order to fix critical issues in production. The central challenge of hotfixes is keeping lower and higher environments in sync with one another.

Since sam-ui-elements is developed as a separate package, a patch or minor release for the major versions in each environment should be made. The package.json file for each version of sam-front-end will then be updated in each environment with the correct version number.

At the moment, sam-front-end still uses sam-ui-elements as a git submodule. The process is effectively the same, although it can be challenging to keep track of the correct version. Until sam-front-end fully switches to the package approach, hotfixes will be applied by branching from the commit SHA of the version of sam-ui-elements in a given environment, apply the hotfix, and save the branch with the following format name release-x.x.x, where the third number increments for each patch applied.

## Sam Design System Component Lifecycle
### Pre-development: Ideation & Prototyping
Initial component analysis and architecture documentation. Requirements gathering, user testing, use case analysis, wireframes, mockups, sketches.

**Purpose:** Define a user need and create solution hypothesis for further investigation and experimentation.

**Outcomes:** Understand the user needs, how the component resolves the user problem, define a potential component solution, and understand how that solution fits into the greater system.

**Fidelity:** Low

**Transition Decision:** There is a clear understanding of the user need and a possible solution

**Gut Check:** Do I know what I’m building?

### Experimental
Initial development work. Components developed in experimental package within sam-ui-elements. Component demo hosted on web-standards-site under appropriate prototypes section.

**Purpose:** Prove feasibility of highest risk elements of the original design hypothesis identify additional risks.

**Outcomes:** Understand the feasibility and risks of developing the component. Have an understanding of the costs of overall development work, the risks inherent in development, and any secondary or tertiary development tasks needed to complete component, including an understanding of how the component fits into the greater system. Code should not be expected to be carried to next environment.

**Fidelity:** Medium

**Transition Decision:** The potential solution has been prototyped, validated and determined to be feasible within constraints.

**Gut Check:** Is this idea feasible?

### Alpha
Ensure component helps users, developers and business meet their needs and objectives. Harden visual and interaction design. Refine component abstraction and object interfaces. Ensure component has a clean, easy to understand architecture.

**Purpose:** Resolve any outstanding risks and create a near-production ready component for user and developer testing.

**Outcomes:** The component should appear to be in its final state. It should be ready for limited external testing. Alpha component should be demoed with users, developers, and business to verify it meets their needs. Any feedback should be incorporated back into the component before release.

**Fidelity:** High

**Transition Decision:** The component is ready for limited release and has a clean architecture, interface, meets the definition of done for the program.

**Gut Check:** Does this solution meet the business requirements?

### Beta
Majority of development work is completed. Component given a controlled, limited release for testing. Emphasis on finding missed use cases, identifying bugs, and ensuring the design, both visual and in code, is of high quality.

**Purpose:** Test component to ensure it meets the needs of users, business, and developers. 

**Outcomes:** Alpha component is tested in limited release. Feedback regarding bugs, missed cases, and usability are gathered and incorporated into the component before final release. 


**Fidelity:** High

**Transition Decision:** The component is ready for limited release and has a clean architecture, interface, meets the definition of done for the program.

**Gut Check:** Did we miss anything?

### Release Candidate
Release candidate serves as a staging area to finalize documentation and prepare end users for changes. Serves as a final checkpoint for testing.

**Purpose:** Stage component for release and ensure component is high quality, free of defects, and understandably documented.

**Outcomes:** Extensive testing shows component is free of defects and documentation is complete and has been reviewed by users of the component to ensure it is comprehensible.

**Fidelity:** High

**Transition Decision:** The component meets business, user, and developer needs, has a clear place in the system architecture, is free of defects and is thoroughly documented.

**Gut Check:** Is this work I’m proud to say is mine?

### Release & Maintenance
As the final stage of the release process, the component is confidently release without qualification.

**Purpose:** Release final, stable component. Maintain component as new issues are identified.

**Outcomes:** Component is tested and available for development tasks in production with complete documentation. As new issues are identified, patches may be released as necessary. Significant changes or enhancements to the component should start over the development cycle from the beginning.

**Fidelity:** High

**Gut Check:** Is this work I would confidently recommend to others?

**Transition Decision:** Does this component need enhancements, changes, or fixes? Patch or restart the process.

### Caveat Emptor: Defect Resolution in Early Stage Components
As technical debt rises, it has a direct, negative impact on the speed of innovation. As teams spend time fixing bugs, they have less time available to explore creative alternatives. 

However, during the innovation process, it should be expected that quality and fidelity should be low. It is unreasonable to expect prototypes and early, alpha versions to be held to the same quality standards as components staged for release. 

In order to protect the rate of innovation, the team cannot be held responsible to fix defects for users who choose to implement the components before they reach a reasonable level of stability. The component states outlined above are designed to indicate our level of confidence in our design and implementation, and if outside users decide to use the components before the beta release, they take on the risk that the components will experience significant change.

At the beta stage, users can expect some stability. We welcome feedback at all stages, but feedback is especially critical following the beta release. At that point, our focus turns from pure creativity and innovation to ensuring our design has high quality and meets expectations.

External users should expect faster response and resolution for components as they approach a full release . Defects found in components that have had a full release should be given the highest priority, followed by release candidates and beta components.

### Developer Tasks
1. Sketches
2. Architectural Documentation
3. Initial prototype development
4. Risk analysis
5. Code production quality component
6. Create unit tests
7. Create integration tests
8. Perform 508 testing
9. Perform end user testing
10. Perform developer testing
11. Create documentation
12. Create example components for documentation
13. Release library and updated release notes
14. Present and explain new component to other development teams

## Integrating Innovation in Sam.Gov
A key aspect of the Sam Design System’s team must be integrating innovation of the system back into Sam.gov. There must be a balance between innovation and integration in order to keep levels of innovation high while also facilitating rapid adoption of innovation back into the system.

As new components enter into the Beta phase, they should be tested in strategic and limited places on sam.gov. While it is fairly trivial to implement new design system components into new features, changing older components with newer ones in existing features often is non-trivial and can create create discord among teams without proper communication.

In order to facilitate integrating innovation, there must be a dual track approach.

### Integrating Innovation in New Features
When application teams develop new features, this is the ideal time to introduce new components into the system. This gives us further opportunities to test our design and development hypothesis with lowest overall cost and risk.

1. Identify and inventory current and upcoming new feature development within Sam.gov
2. Approach application teams with beta or higher components, and discuss how our solution should integrate with their feature
3. Provide integration support to the team in one of various levels depending on the state of the component
  1. At all stages, provide a demonstration of the component to all members of the team and explain the design and development decisions for using the component.
  2. Beta - Work directly with the team to integrate the component. Do pair programming exercises in order to understand pain points in the integration process for the component. Also, identify additional needs.
  3. Release Candidate - Provide team with direct support on an as-needed basis. Identify opportunities to improve documentation. If developers cannot understand how the component works or how to properly integrate, update the documentation to be more user friendly
  4. Released Components - Point teams to the documentation and examples of existing implementations on the Design System Site. Be available to answer questions, and provide direct support to struggling teams.

### Integrating Innovation in Existing Features
Existing features provide significant challenges to innovation. The expected complexity of the features should be expected to be high, and new features must go through new rounds of QA and IV&V testing when modified. The difficulty as well as the cost of innovation is much higher.

In order to facilitate faster adoption of innovation, our team should provide additional support in the following ways.

1. Identify candidate areas for design innovation.
2. Work with key stakeholders to define complexity and risks of modifications.
3. Determine the level-of-effort to make the modifications. 
  1. If the LOE is small (many components of low complexity, a small number of components of high complexity, or some middle ground in between), the design system team should plan to perform the integration tasks themselves.
  2. Otherwise, plan to directly support the teams throughout the integration process.
4. Integration risk changes based on the state of the component
  1. Beta - Strategically choose low impact features to further test the design hypothesis and component design and architecture. Set expectations of testers and teams in terms of defects and continuing development work on the component. Integration of beta components should be limited, strategic, and as infrequent as possible.
  2. Release Candidate - Component is ready for final testing and documentation improvements, so risk is lower than beta components. Testers should expect to find small bugs, and teams should be alerted to these risks.
  3. Released Components - Risk is lowest at this stage. Regression testing should only find bugs related to integration, and teams should feel confident in their ability to add innovation to the feature without introducing significant defects.
5. During the integration process, the design system team should plan to support integration in the following ways depending both on the state of the component and the LOE of the work.
  1. When LOE is small as determined by both the Design Systems and application  teams, e.g.there are numerous components of low complexity, a small number of high complexity components, etc, the Design Systems team should perform the integration work. They should be fully responsible and accountable to the application team from the initial work through the testing and release process.
  2. When LOE is large, the Design Systems team should work closely and directly with the application team to integrate new components. Support should be extended from initial integration through the full release process, and that time should be budgeted and planned for during sprint and release planning.

### Risk is Inherent
Integrating innovation is inherently challenging, risky and arduous. It is costly both to our team and the teams that we are supporting, and problems should be expected to arise and time spent supporting the integration effort.

We should suggest innovation only when we are confident that our proposed design hypotheses will provide significant advantages to business, users, and developers over the existing solutions, and when the benefits outweigh the costs. 
