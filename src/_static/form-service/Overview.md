## Form Service Overview

The SAM Form Service provides a way to emit form events to SAM form controls and templates.

```
<form formGroupName="exampleFormGroup">
    <sam-text required="true"
        useFormService="true" 
        [control]="exampleFormGroup.get("textControl")"
        formControlName="textControl"></sam-text>
    
    <button (click)="formSubmitHandler()">Submit</button>
</form>
```

Inject the service from the ui-kit and use the `fireSubmit()` to update error messages on form controls. 

```
constructor(public samFormService: SamFormService){}

formSubmitHandler(){
    this.samFormService.fireSubmit();
    if(this.exampleFormGroup.valid){
        //handle rest of submission
    }
}
```

### Working with multiple forms

If you have multiple forms active on the page, you can also pass in your "root" Abstract Control to fire the event against a single form instance

In template code:
```
<form formGroupName="exampleFormGroup">
    <sam-text required="true" 
        useFormService="true" 
        [control]="exampleFormGroup.get("nameControl")"
        formControlName="nameControl"></sam-text>
    
    <button (click)="formNameSubmitHandler()">Submit</button>
</form>
<form formGroupName="exampleFormGroup2">
    <sam-text required="true" 
        useFormService="true" 
        [control]="exampleFormGroup2.get("emailControl")"
        formControlName="emailControl"></sam-text>
    
    <button (click)="formEmailSubmitHandler()">Submit</button>
</form>
```

In component code:
```
formEmailSubmitHandler(){
    //this will only update the error messages on exampleFormGroup2
    this.samFormService.fireSubmit(this.exampleFormGroup2);
    if(this.exampleFormGroup2.valid){
        //handle rest of submission
    }
}
```