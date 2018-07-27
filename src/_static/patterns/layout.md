# Layout Pattern
The layout pattern is a set of components designed to enable rapid prototyping and development of new pages within the design system.

Like HTML elements, each component has a content model, or a set of components that can used within it, and contexts in which the component can be used, or a set of components where a component can be used as a child.

The layout pattern also includes a pattern for managing data and interactions. By conforming to the configuration of the patterns, new variations have been developed as quickly as in a day.

## Components
An overview of the available components and how they are related and nested.
```
<sam-page-next>

  <sam-toolbar></sam-toolbar>

  <sam-aside>...TBD...</sam-aside>

  <sam-main>

    <sam-page-title></sam-page-title>

    <sam-filter-drawer>

      <li sam-filter-drawer-item>...</li>

    </sam-filter-drawer>

    <sam-main-content>

      <sam-action-bar>

        <sam-pagination-next></sam-pagination-next>

        <... samPageAction></...>

      </sam-action-bar>

      <... samContentOutlet></...>

    </sam-main-content>

  </sam-main>

</sam-page-next>

<sam-modal></sam-modal>
```

### SamPageNextComponent
The **sam-page-next** component is the main wrapper component for the page. For its content model, it can take a **sam-toolbar**, **sam-aside**, and a **sam-main**. 

When the component is instantiated, the sam-page-next component connects any interactions between the children in its content model. For example, the toggle button in the toolbar component triggers the toggle method on the aside component. This interaction is setup by the sam-page-next controller.

Content-model: **sam-toolbar**, **sam-aside**, **sam-main**

Contexts in which this component can be used: Any Angular application

### SamToolbarComponent
The **sam-toolbar** component provides user interactions that apply to the entire page. Toggling the aside, saving the criteria and downloading the current results are examples of actions that are taken at the page level.

Content model: none

Contexts in which this component can be used: **sam-page-next**

### SamAsideComponent
The **sam-aside** component provides a side navigation area for additional page controls or information. The side navigation can be opened or closed, and it collapses on smaller screens.

Content model: TBD

Contexts in which this component can be used: **sam-page-next**

### SamMainComponent
The **sam-main** component is a container component for the content of the page. 

It accepts a **sam-page-title**, **sam-filter-drawer** and **sam-main-content** component as its content model.

Content model: **sam-page-title**, **sam-filter-drawer**, **sam-main-content**

Contexts in which this component can be used: **sam-page-next**

#### SamPageTitleComponent
The **sam-page-title** component provides a style title for the page. It also allows for super text and additional information to be displayed above and below the title respectively.

Content model: none

Contexts in which this component can be used: **sam-main-content**

#### SamFilterDrawerComponent
The **sam-filter-drawer** component displays which filters have been applied with the ability to remove a single item, clear all, or save the filters. Underneath, it is an **li**, so each child should also be an **li**.

Content model: **li with sam-filter-drawer-item directive**

Contexts in which this component can be used: **sam-main**

##### SamFilterDrawerItemDirective
The **sam-filter-drawer-item** directive should be applied to **li** elements for each item in teh **sam-filter-drawer**. 

Content model: **any valid HTML for li**

Contexts in which this component can be used: **sam-filter-drawer**

#### SamMainContentComponent
The **sam-main-content** component is a wrapper for the content to be displayed within the main component. It may take a **sam-action-bar** component, and to dispaly the content, a parent DOM node must be supplied with the **samContentOutlet** directive applied.

Content model: **sam-action-bar**, any HTML with **samContentOutlet** directive

Contexts in which this component can be used: **sam-main**

##### SamActionBarComponent
The **sam-action-bar** provides actions used to manipulate the main content of the page. It takes a **sam-pagination-next** component and additionally may take any number of additional form controls with the **samPageAction** directive applied.

Content model: **sam-pagination-next**, any form control with **samPageAction** directive

Contexts in which this component can be used: **sam-main-content**

###### SamPaginationNext
The **sam-pagination-next** component provides basic pagination functionality for the page.

Content model: none

Contexts in which this component can be used: **sam-main-content**

###### SamPageActionDirective
The **samPageAction** directive defines actions that can be taken to manipulate the main content of the page. This directive can be applied to any form control, and the appropriate styles and layout will be added.

Content model: Valid HTML for form control

Contexts in which this component can be used: **sam-main-content**

##### SamContentOutletDirective
The **samContentOutlet** directive may be applied to any HTML element that represents the main content of the page. This directive will appropriately style and layout the wrapper. 

Content model: none

Contexts in which this component can be used: **sam-page-next**


### SamModalComponent
If a modal is needed on the page, the **sam-modal** component should be used. However, it should not be a content child of the **sam-page-next** component but rather a sibling. Developers will need to configure that for themselves.

Content model: See **sam-modal**

Contexts in which this component can be used: Any Angular application




