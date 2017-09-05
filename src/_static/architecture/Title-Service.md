# Routes, Titles and 508 Compliance
## What does 508 have to do with lazy loading and Angular modules?
As you have worked with the router in Angular, you may have noticed that the title does not change with the route. Since Angular is a single page application framework, it only serves up a single page with a single head and title tag. Application state is managed with javascript, so the HTML is never updated.

Angular provides a mechanism to change this through the `Title` service from the `@angular/platform-browser` package. It provides getters and setters for the title via the `getTitle` and `setTitle` methods.

## When should the title change?
In a traditional server side MVC framework, fresh HTML is served to the browser whenever the route changes, so the title is always changed. Users expect titles to change along with the routes, so we need to ensure that as the route changes, so does our title. The only exception to this would be for hashed routes or route params. In those cases, the title should not change.

## Setting Titles on Sam.gov
I have already implemented our own service for updating the titles. In the `AppComponent`, the `SamTitleService` is injected into the constructor. On initialization, we subscribe to the router and listen for `NavigationEnd` events. When navigation completes, it calls the `SamTitleService`’s `setTitle` method with the url as the parameter. `setTitle` then calls a factory function inside the service that returns the title string based on the url.

Developers on the project only need to add their new route as a property of the mappings object inside `SamTitleService` with an appropriate title each route.