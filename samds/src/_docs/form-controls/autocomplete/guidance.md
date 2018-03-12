Autocomplete lets a person select one value from a potentially long list of items.  These items may be categorized, making it easier to identify an appropriate selection.

#### *When to use*

* Autocomplete is used for data entry fields with a list of more than approximately 20 values where only one selection may be made.   This number is a rough guideline and partly depends on whether you expect people will have a good idea of what they need to enter.
* Autocomplete should be considered as the starting point for creating shared SAM components to support widely used data fields.  
* Examples of SAM components which already rely on autocomplete include the agency picker, state picker, country picker, NAICS picker, and PSC picker.  These pickers also have comparable multi-select versions.  

#### *When to consider something else*

* For fields with lists of approximately 5 – 20 values, use the select component.  For approximately 2 to 7 values, use radio buttons.  These numbers are rough guidelines and partly depend on how much screen real estate you have and whether people need to immediately see all of the choices.
* Most search and workspace filtering is multi-select.  Therefore, autocomplete multiselect is used for filtering unless an exceptional case can be made otherwise.

#### *How to use*

* Provide default values that appear when autocomplete first gets focus. The default values should provide insight into the list by allowing people to scroll through valid selections.  People should not have to guess what to type. 

![alt text](/src/assets/img/Autocomplete.png "Autocomplete with default values")

* Categorize the values for autocomplete when logical groups exist.

![alt text](/src/assets/img/Autocomplete.Categorized.png "Autocomplete with categorized values")

* Sort the values alphabetically, numerically, functionally, or by most popular.  Sort order is based on what is most intuitive for users of your field.  Make it as easy as possible for people to find their choice.
* When values are hierarchical, such as in the agency picker or NAICS picker, the default values and sort order should follow the hierarchy and display an entire parent level before any children. 

![alt text](/src/assets/img/NAICSPicker.png "Autocomplete with hierarchical values")

* Enhance the display of your values if a single value does provide enough clarity.  For example, the NAICS picker above uses two columns to display the NAICS code along with a simple description.  The agency picker below shows three fields, the organization name, the level, and the department.

![alt text](/src/assets/img/Autocomplete.Enhanced.png "Autocomplete with enhanced display")

**Note:**  The same angular data model may be used to support both autocomplete and multi-select autocomplete, making it easy to support both single selection and multiple selection of a data field in different places or at different times.