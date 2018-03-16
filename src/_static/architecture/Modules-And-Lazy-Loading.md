# Modules and Lazy Loading
## Principles and Practices for Sam.gov Angular Development Teams 

## Overview
### What is lazy loading?
Lazy loading is a design pattern that gives us the ability to instantiate a class only when that class is needed. [Wikipedia](https://en.wikipedia.org/wiki/Lazy_loading) gives us a more formal definition:

>Lazy loading is a design pattern commonly used in computer programming to deferinitialization of an object until the point at which it is needed. It can contribute to efficiency in the program's operation if properly and appropriately used. The opposite of lazy loading is eager loading. The performance gains are especially significant if the initialization of the object is costly, such as in case of accessing network services. This makes it ideal in use cases where network content is accessed and initialization times are to be kept at a minimum, such as in case of web pages.

The sam.gov site eagerly loads all feature models on initial page load. This is one of the main contributors to our (currently) abysmal load time. Aside from increasing the size of the main bundle, it also increases compile time as Angular must register and compile those modules on initial page load.

### How does Angular perform lazy loading?
Angular provides us with the ability to perform lazy loading, however, it has its own unique approach. Much like dependency injection, while lazy loading is a general software design pattern, Angular provides us with a lazy loading framework with conventions that must be followed precisely.

While lazy loading in general is typically used on an object or class, Angular’s mechanisms for lazy loading are feature modules and the router.

### Modules

Modules allow us to neatly package up features and manage their dependencies. Every Angular application will always have one application module. The application module must contain all the dependencies needed to bootstrap the application and compile the first view. 

Feature modules represent modules that encompass a set of features and dependencies that are not required to bootstrap the application. They can then be imported into the application module or registered via the router in order to be added to the application.

While Angular does have a specific convention for creating modules, there is ultimately no restriction on what can or cannot be included. Modules can be any collection of components, services, and dependencies. The `NgModule` decorator provides the following properties for developers when building new modules:

* Imports - An array of modules that are dependencies for the new module you are building. Imports tell Angular which modules are dependencies for the current module and make those dependencies available to components within the module. 
* Declarations - An array of components, directives or pipes that are registered with Angular’s compiler. A component may only be declared once in one module. Anything in declarations is available to other components in that module.
* Providers - An array of services that can then be used via dependency injection in any constructor for components in the module
* Exports - An array of components, directives, pipes, or providers that are made available outside the current module. Anything that is exported can be used by any other component that is available from its parent context. We will explore this more later.

When we think of lazy loading in Angular, we must think of the module with all its imports, declarations, and providers.

### Router
The control mechanism for lazy loading in Angular is its router. For a single page application framework, this is an excellent design decision. Angular’s router is a component router. Rather than serving up a complete set of html and Javascript for a given route like traditional server side rendering, Angular’s router changes the configuration of components nested inside the main application component depending on the URL.

Without lazy loading, all modules are registered and compiled as soon as root URL is reached. With lazy loading, however, only the modules necessary to to render that particular route are downloaded by the browser. In order to get the most out of lazy loading, each route should have an associated feature module that declares and provides the minimum number of components necessary to compile at its destination URL, and no other route should depend on components that are exported by that feature module.

## Implementation Details
The following implementation details are specific to our project. For a general overview of setting up lazy loading on any project, read Angular core contributor Todd Motto’s article [Lazy loading: code splitting NgModules with Webpack](https://toddmotto.com/lazy-loading-angular-code-splitting-webpack)


### Webpack Setup
While modules and the router are all that is minimally required to get lazy loading setup in Angular, the build process must also be respected.

First, the webpack build must be configured to support chunking. Since we are lazy loading, our main bundle should only contain the code necessary for the initial load. Chunking allows webpack to break our modules into smaller pieces that can then be loaded by the browser as needed.

To support chunking with webpack, we only need to add  the `chunkFilename` property to the output object.

    output: {
        filename: ‘[name].js’,
        chunkFilename: ‘[name]-chunk.js’,
        path: ... etc ...
    }

Next we need to add the `angular-router-loader` module. Be sure to install and save it via npm first.

    loaders: [
        ‘angular-router-loader’,
        ...
    ]

The `angular-router-loader` module will manage breaking up our modules into chunks and resolving the `loadChildren` paths to the correct chunk.

The webpack configuration for our project has been updated, so there should be no need under normal circumstances for developers to modify this portion of the configuration.

### Defining Modules
Earlier we discussed feature modules. We defined them as “a set of features and dependencies that are not required to bootstrap the application”. However, modules that are lazy loaded require extraordinary discipline in defining imports and exports, since breaking the bundles into smaller pieces necessarily means making less code available globally on the App module.

While the Angular community speaks about feature modules in general terms, let us take a moment to define how we want modules to work in the context of Sam.gov.

#### Root Module
A root module in an Angular application specifies the platform and declares the minimal number of dependencies required to compile the application. Every Angular application must have one and only one root module. In our case, the platform is the browser, so we will always include the `@angular/platform-browser` module in our root module.

By convention, root modules should be named `AppModule`.

#### Feature Modules
In the most concise and precise terms, feature modules aggregate the shared modules and dependencies required to compile each non-hashed url route as a standalone page. 

Each feature module must have one and only one route used as an entry point for that module. Any other routes registered on a feature module may only be children. Feature modules must not have dependencies on other feature modules; therefore, feature modules also should not have exports. 

Feature modules can and should define other feature modules as children as necessary; however, the definition for feature module must be applied recursively such that each child has no dependency on siblings or the parent module. 

An easy litmus test is to remove a module’s route declaration. If the application and all other registered feature modules compile, the feature module was correctly implemented.

Feature modules should use `PascalCase` for the name and should also be postfixed with `Module`, e.g., `ExampleModule`, `FederalAssistanceListingModule`.

#### Routing Modules
Routing modules import Angular’s `RouterModule`, register them with the RouterModule and export them to a feature module. Their sole purpose is to make managing routes easier to manage and to establish conventions for larger projects.

One could just as easily import the `RouterModule` directly on a feature module and register the routes in the import statement. While that approach is effectively the same as creating an additional module and less verbose, we discourage developers from doing this. Separating the routes into an additional file and module allows us to be consistent and share a common mental model, which is important on a project of this size and complexity.

Routing modules take the name of its parent module with `RoutingModule` postfixed, e.g, `ExampleRoutingModule`, `FederalAssistanceLisitingRoutingModule`.

#### Shared Modules
Shared modules represent collections of components, directives, pipes, and services intended to be exported and shared by the root or feature modules. Unlike feature modules, shared modules should export the majority of components, directives, pipes, services, etc, that it declares.

#### Combining Modules
Below is a diagram showing how we should think about module’s and their contexts. In the case of shared modules, their contents are exported and are made globally available in the application context.

![Diagram of module architecture](/assets/img/module-architecture.png "Diagram of Module Architecture")


### Defining Routes
The router is the primary mechanism that drives lazy loading in an Angular application, therefore, having strict standards for route naming conventions is important both from the perspective of internal consistency and to set up lazy loading on Sam.gov.

#### Hashed Routes
Hashed routes are prepended with `#` symbols and work in the same manner as route fragments traditionally do. These routes should not be associated with modules or even components, but rather should trigger a page jump to an HTML element with the associated id.

#### Route Params
Routes params are prefixed with `?` and represent additional information used as query parameters for that url’s associated page component. An excellent example is the search page, where route params are used to query the API and return the results accordingly.

#### Non-Hashed Routes
By default, non-hashed routes are any routes that are not covered by the above definitions. Each route must have an associated feature module, and each segment of nested routes must also have an associated feature module and be registered as a child route of its parent feature module.

#### Naming Conventions
All of our routes should be written in lowercase using the kebab-case spelling convention.

### Building a Lazy Loaded Module
Now that we have defined terms, let us walk through an example of setting up a lazy loaded feature module. First, let’s create a routing module.

#### Creating the Feature Module’s Routing Module
    // in /example-child1.routes.ts
    const routes: Routes = [
      {
        path: ‘’,
        component: ‘ExampleComponent’,
        children: [
          { path: ‘’, loadChildren:   
            ‘./ExampleChild1.module#ExampleChild1Module’ },
          ...etc...
        ]
      }
    ]

    @NgModule({
      imports: [ RouterModule ],
      exports: [ RouterModule.forChild(routes) ]
    })
    export class ExampleRoutingModule
    
Notice that the path property is an empty string. This is by design and part of the syntax needed for lazy loading. When the feature module is registered with its parent, the path string will be added there, and the app routing module will use this route with an empty path string as the entry point for the module.

We spoke earlier that each feature module may only have one parent route with no siblings, and now we see why. Any sibling routes declared in the module will be ignored.

#### Creating the Feature Module
    // in /example-child1.module.ts
    @NgModule({
      imports: [
        CommonModule,
        ExampleRoutingModule,
        CommonComponentsModule,
        ApiKitModule
      ],
      declarations: [
        ExampleComponent
      ],
      providers: [
        // If the Example component needs them, add here
      ]
    })
    export class ExampleModule {}

#### Register the Feature Module via AppRoutingModule
Next, let’s update the `AppRoutingModule` found in app.routes.ts

    // in app.routes.ts
    const routes: Routes = [
      { path: ‘example’, loadChildren: 
          ‘./example-file.module#ExampleFile’ }
    ]
    @NgModule({
      imports: [ RouterModule ],
      exports: [ RouterModule.forRoot(routes) ]
    })
    export class AppRoutingModule

The only remaining step is to import the routing module into the `AppModule`:

    // in app.module.ts
    @NgModule({
      imports: [
        ...,
        AppRoutingModule,
        ...,
      ],
    })
    export class AppRoutingModule

And we’re done! The application will now lazy load the `ExampleModule`, reducing the size of the main bundle and decreasing initial compilation time. Our code is now truly modular, loosely coupled, resilient, and easy to modify. 
