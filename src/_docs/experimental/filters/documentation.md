# SAM Filters

The SAM filters component is a wrapper component used to rapidly develop forms based on JSON objects rather than writing templates.

SAM Filters utilizes (ngx-formly)[https://github.com/formly-js/ngx-formly] along with Angular's reactive forms module to dynamically render filters according to a configurable model.

The `SamFormlyModule` creates wrappers that map template types to the SamUIKit form controls.

You may configure any form control by passing any valid input to the `templateOptions` on the `FormlyFieldConfig` object. Please view the documentation for `ngx-formly` and the individual form controls for more information.