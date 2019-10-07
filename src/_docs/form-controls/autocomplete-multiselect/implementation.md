The Autocomplete Multiselect component works similarly to the Autocomplete component. Any service directives created for the single select autocomplete component should also work seamlessly with the multiselect autocomplete. 

The major difference between the two components in terms of code use is the lack of a config object and the type of the output. 

The first major difference is that we removed the config object. Rather than using this, developers should directly use inputs and outputs on the component's html markup. Angular's change detection does not do deep checking, and this made it more difficult for some of our developers to use the components without workarounds. We hope to make the APIs for both components match in the future.

The second major difference comes from the output type. Since multiple values can be used for output, the data type is now an array. That also means you must initialize your model with an array when using this component. Also keep that in mind if you need to initialize the component with data, e.g., when the user is editing previously submitted data. You will need to make sure the values you provide to the component are members of an array.

## Working with Paginated Services

The autocomplete multiselect supports working with services that use pagination to implement an infinite scroll effect. The component itself stores the values passed to it and removes duplicates. However, the developer using the component must track the pagination by search string herself.

The following class demonstrates how to setup pagination with the component. As with any autocomplete service, we start by implementing the AutocompleteService interface.

```typescript
export class ACTestService implements AutocompleteService
```
    
The values in this component come from a private member property, but this could just as easily come from a service call. In that case, the developer would need to use Angular's @Injectable() decorator.

```typescript
private values: any = [
    { key: 'Random', value: 'Random'},
    { key: 'Just some data', value: 'Just some data'},
    ...
];
```

In this simple example, we use the property names start and end to track pagination; however, typically pagination properties are called offset and limit.

We initialize the start property to 0 to start at the beginning of the index. The end property indicates the last index in the array that should return from the results.

Finally, lastSearch is used to track the current filter string. When the string changes, the pagination should reset since the result list should be different.

```typescript
private start: number = 0;
private end: number = 2;
private lastSearch: string;

public setFetchMethod(_: any) {}
```
    
The resetPagination method is used to reset the pagination variables back to their initial state when the searchString changes.

```typescript
public resetPagination() {
    this.start = 0;
    this.end = 2;
}
```

The fetch method from the AutocompleteService is where most of the magic happens. First, we check if the latest search string, val, is the same as the lastSearch. If not, we reset pagination.

```typescript
public fetch(val: string, pageEnd: boolean, serviceOptions: any) {
    if (val !== this.lastSearch) {
      this.resetPagination();
    }
}
```

Next, if the pageEnd parameter is true and val hasn't changed since the last search, increment the indices that are used for pagination. In this case, I also added a check that if the index is out of scope, return an empty array.

```typescript
if (pageEnd && val === this.lastSearch) {
    this.start = this.end;
    this.end = this.end + 2;
    if (this.end > this.values.length) {
      return Observable.of([]);
    }
}

this.lastSearch = val;
```

Finally, we call the filter method to return the sliced array with the correct indices.

```typescript
    ...
    return Observable.of(this.filter(val).slice(this.start, this.end));
  }

  private filter (val) {
    return this.values.filter(
        (value) => {
            if (value.key.toLowerCase().includes(val.toLowerCase())
                || value.value.toLowerCase().includes(val.toLowerCase())) {
                return value;
            }
        }
    );
  }
}
```

In an ideal world, most of this tracking will be done by an API call. However, this example serves to demonstrate the concerns that developers need to account for when implementing pagination on this component.

### Complete Service Code

```typescript
export class ACTestService implements AutocompleteService {
    private values: any = [
      { key: 'Random', value: 'Random'},
      { key: 'Just some data', value: 'Just some data'},
      ...
    ];
  
    private start: number = 0;
    private end: number = 2;
    private lastSearch: string;
  
    public setFetchMethod(_: any) {}
  
    public resetPagination() {
      this.start = 0;
      this.end = 2;
    }
    public fetch(val: string, pageEnd: boolean, serviceOptions: any) {
      if (val !== this.lastSearch) {
        this.resetPagination();
      }
      if (pageEnd && val === this.lastSearch) {
        this.start = this.end;
        this.end = this.end + 2;
        if (this.end > this.values.length) {
          return Observable.of([]);
        }
      }
  
      this.lastSearch = val;
      return Observable.of(this.filter(val).slice(this.start, this.end));
    }
  
    private filter (val) {
      return this.values.filter(
        (value) => {
          if (value.key.toLowerCase().includes(val.toLowerCase())
            || value.value.toLowerCase().includes(val.toLowerCase())) {
            return value;
          }
        }
      );
    }
}
```
