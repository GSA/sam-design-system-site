The Autocomplete Multiselect component works similarly to the Autocomplete component. Any service directives created for the single select autocomplete component should also work seamlessly with the multiselect autocomplete. 

The major difference between the two components in terms of code use is the lack of a config object and the type of the output. 

The first major difference is that we removed the config object. Rather than using this, developers should directly use inputs and outputs on the component's html markup. Angular's change detection does not do deep checking, and this made it more difficult for some of our developers to use the components without workarounds. We hope to make the APIs for both components match in the future.

The second major difference comes from the output type. Since multiple values can be used for output, the data type is now an array. That also means you must initialize your model with an array when using this component. Also keep that in mind if you need to initialize the component with data, e.g., when the user is editing previously submitted data. You will need to make sure the values you provide to the component are members of an array.