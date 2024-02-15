There are multiple strategies for working with the autocomplete component. First, data can be provided either as an array of string or as an array of objects that provide key/value pairs. 

To use key/value pairs with this component, you will also need to include the `config` property. You must provide the name of the property on the object you want to use in that config for both the key and the value.

Imagine your options are an array of people objects with the following structure.
```typescript
const options = [
    {
        name: 'Jack',
        id: 01,
        address: '1 Main Street',
        sibling: 02
    },
    {
        name: 'Jill',
        id: 02,
        address: '1 Main Street',
        sibling: 01
    }
]
```
For the component, I want to display the name property to the user, but I need to pass back the id property to my server. I can then set the config to support this behavior:
```typescript
const config = {
    keyValueConfig: {
        keyProperty: 'id',
        valueProperty: 'name'
    }
}
```
Now, the component will display the person's `name` and pass out the person object from the component.

This component can also be used with an injected service to provide the options or by using the `options` input on the component. You should not use both, and the `options` input will always take precedence over the injected service. If `options` are passed to the component at all, the service will be ignored.

```typescript
@Injectable()
export class MyService implements AutocompleteService {

    constructor(private http: Http) {} // This is completely optional, but necessary if you need to make remote calls

    setFetchMethod(_: any) {}

    fetch(value: any, pageEnd: boolean, serviceOptions: any): Observable<any> {
        return Observable.of([]).map(o => o);
    }
}
```

One of the strategies we employ with this approach is to provide the dependency directly on the component with a directive. A thorough understanding of Angular's Dependency Injection framework is helpful if you plan on using this approach. However, the reasoning behind this approach for us initially was to support the use of a customizable service, and the directive allows us to apply the token directly onto the component without worrying about potential interactions with other autocomplete components that might also be available within the same parent component.

```typescript
@Directive({
    selector: 'sam-autocomplete[myService]',
    providers: [
        {provide: AutocompleteService, useExisting: MyService}
    ]
})
export class MyServiceDirective {}
``` 

This directive is for the simplest use case. Here, you have created a service and are injecting into the component. Be aware of `useExisting`. This value may or may not be the correct choice depending on your use case. `useExisting` injects an already instantiated service. Documentation for the dependency injection framework and other values are available through Angular's documentation site.

We can also use the directive to more powerfully manipulate the service with additional input or output parameters. If you need to pass the service variables from the parent component or you would like to emit additional data from the service, you could follow this approach:

```typescript
@Directive({
    selector: 'sam-autocomplete[myService]',
    providers: [
        {provide: AutocompleteService, useExisting: MyService}
    ]
})
export class MyServiceDirective {
    @Input() extraServiceVariable: any;
    @Output() serviceEventEmitter: EventEmitter<any> = new EventEmitter<any>();

    ngOnChanges() {
        this.service.myCustomMethod(extraServiceVariable);
        this.serviceEventEmitter.emit(this.service.someMethod());
    }
}
``` 

In your html implementation, you would then have something like:

```
<sam-autocomplete myService [extraServiceVariable]="stateVariable" (serviceEventEmitter)="eventHandlerMethod($event)"></sam-autocomplete>
```
